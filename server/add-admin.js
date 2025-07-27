const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Add admin user
const addAdminUser = async () => {
  try {
    console.log('👨‍💼 Adding admin user...');
    
    const adminEmail = 'tmmethode1@gmail.com';
    const adminPassword = 'admin';
    
    // Check if admin user already exists
    let adminUser = await User.findOne({ email: adminEmail });
    
    if (adminUser) {
      console.log('ℹ️  Admin user already exists, updating credentials...');
      adminUser.password = adminPassword;
      await adminUser.save();
      console.log('✅ Admin user updated successfully');
    } else {
      console.log('📝 Creating new admin user...');
      adminUser = new User({
        name: 'TMMETHODE Admin',
        email: adminEmail,
        password: adminPassword,
        role: 'admin'
      });
      await adminUser.save();
      console.log('✅ Admin user created successfully');
    }
    
    console.log('\n📊 Admin User Details:');
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Password: ${adminPassword}`);
    console.log(`👤 Role: ${adminUser.role}`);
    console.log(`🆔 User ID: ${adminUser._id}`);
    
    console.log('\n🎉 Admin user setup completed successfully!');
    console.log('\n🔗 Next Steps:');
    console.log('1. Start the server: npm run dev');
    console.log('2. Access admin panel: http://localhost:3000/admin');
    console.log('3. Login with the credentials above');
    
    return adminUser;
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    process.exit(1);
  }
};

// Main function
const main = async () => {
  try {
    console.log('🚀 Starting admin user setup...');
    
    // Connect to database
    await connectDB();
    
    // Add admin user
    await addAdminUser();
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
};

// Run the script
if (require.main === module) {
  main();
}

module.exports = { addAdminUser }; 