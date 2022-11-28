export class Inspire {
    constructor(data) {
        this.imgUrl = data.largeImgUrl
        this.author = data.author
    }

    get ImageTemplate() {
        return `
        <h6>Image taken by:${this.author}</h6>
        `
    }
}







