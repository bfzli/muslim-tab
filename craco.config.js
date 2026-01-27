const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@types': path.resolve(__dirname, 'src/types'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@components': path.resolve(__dirname, 'src/ui/components'),
            '@elements': path.resolve(__dirname, 'src/ui/elements'),
            '@icons': path.resolve(__dirname, 'src/ui/icons'),
            '@styled/content': path.resolve(__dirname, 'src/ui/components/Content/Components'),
            '@styled/footer': path.resolve(__dirname, 'src/ui/components/Footer/Components'),
            '@styled/logo': path.resolve(__dirname, 'src/ui/components/Logo/Components'),
            '@styled/elements': path.resolve(__dirname, 'src/ui/elements/Components')
        }
    }
}
