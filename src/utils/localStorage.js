export default {
    hasItem: function(key) {
        return window.localStorage.hasOwnProperty(key);
    },
    setItem: function(key, value) {
        window.localStorage.setItem(key, value);
    },
    getItem: function(key) {
        if (this.hasItem(key)) {
            return window.localStorage.getItem(key);
        }
        return "";
    },
    removeItem: function(key) {
        if (this.hasItem(key)) {
            window.localStorage.removeItem(key);
        }
    },
    clear: function() {
        window.localStorage.clear();
    }
};
