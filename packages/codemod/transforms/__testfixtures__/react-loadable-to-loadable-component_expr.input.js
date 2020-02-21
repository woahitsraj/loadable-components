/* eslint-disable */
import Loadable from 'react-loadable'

const Loading = () => {
  return null
}

const CustomLinkLoadable = Loadable({
  loader: () =>
    import(/* webpackChunkName: "custom-link" */ '@components/CustomLink/Link'),
  loading: Loading,
  delay: 0,
})
