import { EmptyState, Layout, Page } from '@shopify/polaris'
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react'
import store from 'store-js'
import ResourceListWithProducts from '../components/resourceList'

// const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

class Index extends React.Component {
    render() {
        return (
            <Page>
                <ResourceListWithProducts />
            </Page>
        )
    }
}

export default Index