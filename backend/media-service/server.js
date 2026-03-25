import app from './src/app.js'
const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`🚀 AWS Media Service running on port ${PORT}`);
});