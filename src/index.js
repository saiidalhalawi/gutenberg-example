import riot from 'riot'
import route from 'riot-route'
import app from './tags/app.tag'
import navbar from './tags/shared/navbar.tag'
import mainContent from './tags/main-content.tag'
import postsList from './tags/blog/posts-list.tag'
import post from './tags/blog/post.tag'

document.body.appendChild(document.createElement('app'))
riot.mount('app');
route.start(true);
