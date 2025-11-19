const imageContext = require.context('../../img', false, /\.(jpg|jpeg|png|gif|svg)$/);

function importAllImages() {
    return imageContext.keys().map(imageContext);
}
export default importAllImages;