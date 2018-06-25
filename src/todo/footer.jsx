import './footer.styl'

export default {
    data() {
        return {
            author: 'kuleyu',
            blog: 'kuleyu-hugo.netlify.com'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Power by {this.author}，欢迎访问作者博客：<a href="https://kuleyu-hugo.netlify.com" target="_blank">{this.blog}</a></span>
                <br/>
                <span>Hosted by Github Pages</span>
            </div>
        )
    }
}