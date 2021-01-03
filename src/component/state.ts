import {extendComponent} from './component'

extendComponent({

    /**
     * Set element data
     * @param key
     * @param value
     */
    set: function (key: string, value: any) {
        var element = this.element
            element._state[key] = value
    },

    /**
     * Get element data
     * @public
     * @param key
     * @param _default
     */
    get: function (key: string, _default?: any): any {

        var element = this.element

        if (key === undefined) {
            return element._state
        }

        var value = element._state[key]
            value = (value === undefined) ? _default : value

        return value
    },

    /**
     * Update component after state change
     */
    update: async function(){
        return this.render()
    }

})