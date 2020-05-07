/* eslint-disable */
import loadable from '@loadable/component'

const Loading = () => {
  return null
}

const CustomLinkLoadable = loadable(() =>
  import(/* webpackChunkName: "custom-link" */ '@components/CustomLink/Link'), {
  fallback: <Loading />,
})
