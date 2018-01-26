module.exports = {
	//env var on Netlify set to: https://politismart-serverside.herokuapp.com (
	//env vars available on Netlify only after linking to github! - under "Build & Deploy")
	API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 
    	"http://localhost:808d0"
};


