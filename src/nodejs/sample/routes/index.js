// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

/*  This route render json data */
router.get('/json', (req, res) => {
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
	res.redirect('https://www.turbo360.co/landing')
})

router.get('/test', (req, res)=>{
	res.json({
		data:'this is a response!'
	})
})

router.get('/query',(req, res) =>
{
	const name = req.query.name
	const occupation = req.query.occupation
	const data ={
		name:name,
		occupation:occupation
	}

	res.render('profile', data)
})

router.get('/:path',(req, res) =>
{
	const path = req.params.path
	res.json({
		data: path
	})
})

const profiles =
	{
		dkwon:{
			name: 'dan kwon',
			company: 'self',
			languages: ['javascript', 'swift','python']
		}
		,
		dkwon2:{
			name: 'dan kwon',
			company: 'self',
			languages: ['javascript', 'swift','python']
		},
		dkwon3:{
			name: 'dan kwon',
			company: 'self',
			languages: ['javascript', 'swift','python']
		}

	}

	router.get('/:profile/:username', (req,res) =>
	{
		const profile = req.params.profile
		const username =req.params.username

		const cprofile = profiles[username]

		if(cprofile== null)
		{
			res.json({
				confirmation:'fail',
				message: 'Profile ' + username + ' Not found'
			})
			return
		}

		// res.json(
		// 	{
		// 		confirmation:'success',
		// 		profile: cprofile
		// 	}
		// )
		res.render('profile', cprofile)
	})


router.post('/addprofile',(req, res)=>
{
	const body= req.body
	res.json({
		confirmation: 'success',
		data: body
	})
})
router.post('/post', (req, res)=>{
	const body = req.body
	body['languages'] = req.body.languages.split(',')
	res.json({
		confirmation:'success',
		data: body
	})
})





module.exports = router
