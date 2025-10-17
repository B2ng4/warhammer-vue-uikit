export * from './components';

import * as components from './components';

const WahKit = {
    install(app) {
        for (const componentName in components) {
            const component = components[componentName]
            app.component(component.name, component)
        }
    }
}

export default WahKit;