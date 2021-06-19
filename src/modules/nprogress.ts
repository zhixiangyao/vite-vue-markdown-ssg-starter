import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { UserModule } from '/@/types'

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
