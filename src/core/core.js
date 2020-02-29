(function () {

    // Core lib
    window.V = {

        /**
         * Run loop on items
         * @param {Array|Object} items
         * @param {Function} callback
         * @return {void}
         */
        each: function (items, callback) {

            if (Array.isArray(items)) {
                items.forEach(callback);
            } else {

                const keys = Object.keys(items);
                for (const key of keys) {
                    callback(items[key], key, items);
                }

            }

        },

        /**
         * Load an plugin on the library
         * @param {Object} plugin
         * @return {void}
         */
        extend: function (plugin) {

            const self = this;

            self.each(plugin, function (value, key) {

                if (self[key] !== undefined) {
                    console.warn('Warning, the method {key} is being overwrite be another plugin', key);
                }

                self[key] = value;

            });

        },

        /**
         * Promisify the callback
         * @param {Object} scope
         * @param {Function} callback
         * @return {Promise}
         */
        promisify: function (scope, callback) {
            return new Promise(function (resolve, reject) {
                return callback.apply(scope, [resolve, reject]);
            });
        }

    };

})();