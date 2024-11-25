const Router =require('express')
const postController =require('../controllers/post.controllers.js')

const router = new Router()


router.post('/post',postController.createPost)
router.get('/post',postController.getPostByUser)


module.exports = router