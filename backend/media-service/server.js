import app from './src/app.js'
const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
    console.log(`🚀 AWS Media Service running on port ${PORT}`);
});