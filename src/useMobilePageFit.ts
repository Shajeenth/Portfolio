import { useLayoutEffect, type RefObject } from 'react'

export const mobilePageQuery = '(max-width: 768px), (max-width: 1024px) and (max-height: 500px)'

/** Fit the current page by resizing its mobile typography and spacing. */
export function useMobilePageFit(pageRef: RefObject<HTMLDivElement | null>, page: string) {
  useLayoutEffect(() => {
    const wrapper = pageRef.current
    const main = wrapper?.querySelector('main')
    const content = main?.firstElementChild
    if (!wrapper || !main || !(content instanceof HTMLElement)) return

    const mobile = window.matchMedia(mobilePageQuery)
    let frame = 0
    let active = true

    const fit = () => {
      if (!active) return
      if (!mobile.matches) {
        wrapper.style.removeProperty('--mobile-fit')
        return
      }

      const fits = (scale: number) => {
        wrapper.style.setProperty('--mobile-fit', String(scale))
        const style = getComputedStyle(main)
        const availableHeight = main.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom)
        return content.getBoundingClientRect().height <= availableHeight - 1
          && content.scrollWidth <= content.clientWidth
          && main.scrollWidth <= main.clientWidth
      }

      if (fits(1)) return

      // Find the largest text size that keeps the complete page in the viewport.
      let lower = 0.1
      let upper = 1
      for (let step = 0; step < 12; step += 1) {
        const middle = (lower + upper) / 2
        if (fits(middle)) lower = middle
        else upper = middle
      }
      fits(lower)
    }

    const scheduleFit = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(fit)
    }

    fit()
    const observer = new ResizeObserver(scheduleFit)
    observer.observe(main)
    observer.observe(content)
    window.addEventListener('resize', scheduleFit)
    window.visualViewport?.addEventListener('resize', scheduleFit)
    document.fonts.addEventListener('loadingdone', scheduleFit)
    void document.fonts.ready.then(() => { if (active) scheduleFit() })

    return () => {
      active = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', scheduleFit)
      window.visualViewport?.removeEventListener('resize', scheduleFit)
      document.fonts.removeEventListener('loadingdone', scheduleFit)
    }
  }, [pageRef, page])
}
