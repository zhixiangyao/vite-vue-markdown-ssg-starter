import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
