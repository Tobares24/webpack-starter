const HtmlWebPackPlugin = require('html-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // Modo desarrollo
    mode: 'development',

    // Limpia los archivos que ya hemos eliminado
    output: {
        clean: true
    },

    module: {
        // Reglas a los archivos
        rules: [
            {
                // Evalúa que el archivo sea css y permite la importación del css en los js
                test: /\.css$/,
                // Excluimos este archivo para que se ejecuta las demás reglas
                exclude: /styles\.css$/i,
                // Carga las hojas de estilos y archivos css
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // Agregar a la carpeta dist y aplica los estilos globales sin necesidad de importar en el index
            {
                // Evalúa un archivo en específico, en este caso el style.css
                test: /styles\.css$/,
                // Usamos el plugin
                use: [
                    MinicssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                // Expresion que busca todos los archivos html
                test: /\.html$/i,
                // Carga nuestros archivos
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                },
            },
            // Importaciones de imágenes
            {
                // Busca una imagen
                test: /\.(png|jpe?g|gif)$/,
                // Carga todos los archivos
                loader: 'file-loader'
            }
        ]
    },
    // Hace cambios en el html dev
    plugins: [
        // Se instancia un nuevo html de webpackplugin
        new HtmlWebPackPlugin({
            // Es el archivo del cual quiero que se base en esto
            template: './src/index.html',
            // El nombre del archivo
            filename: './index.html'
        }),
        // Configurar el plugin
        new MinicssExtractPlugin({
            // Cambiar el nombre de nuestro archivo por el mismo del archvio js
            filename: '[name].css',
            // Ignora el orden en caso de que no nos importe el orden de las importaciones en css
            ignoreOrder: false
        }),

        // Plugin para recursos estáticos como imágenes
        new CopyPlugin({
            // Va hacer todo lo que se encuentre en nuestro directorio assets
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })

    ]

}