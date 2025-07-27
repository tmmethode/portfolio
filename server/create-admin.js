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

// Create or update admin user
const createAdminUser = async () => {
  try {
    console.log('👨‍💼 Setting up admin user...');
    
    // Get admin credentials from command line arguments or environment variables
    const adminEmail = process.argv[2] || process.env.ADMIN_EMAIL || 'admin@tmmethode.com';
    const adminPassword = process.argv[3] || process.env.ADMIN_PASSWORD || 'secure_admin_password_123';
    
    if (!adminEmail || !adminPassword) {
      console.error('❌ Please provide admin email and password');
      console.log('Usage: node create-admin.js <email> <password>');
      console.log('Or set ADMIN_EMAIL and ADMIN_PASSWORD environment variables');
      process.exit(1);
    }

    // Check if admin user already exists
    let adminUser = await User.findOne({ role: 'admin' });
    
    if (adminUser) {
      console.log('ℹ️  Admin user already exists, updating credentials...');
      adminUser.email = adminEmail;
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
    console.log(`🔑 Password: [Set via command line or environment variable]`);
    console.log(`👤 Role: ${adminUser.role}`);
    console.log(`🆔 User ID: ${adminUser._id}`);
    
    console.log('\n⚠️  Security Recommendations:');
    console.log('1. Change the default password after first login');
    console.log('2. Use a strong, unique password');
    console.log('3. Enable two-factor authentication if possible');
    console.log('4. Regularly rotate admin credentials');
    
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
    
    // Create admin user
    await createAdminUser();
    
    console.log('\n🎉 Admin user setup completed successfully!');
    console.log('\n🔗 Next Steps:');
    console.log('1. Start the server: npm run dev');
    console.log('2. Access admin panel: http://localhost:3000/admin');
    console.log('3. Login with the credentials above');
    
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

module.exports = { createAdminUser }; 