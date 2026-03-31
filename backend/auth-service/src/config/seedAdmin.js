import User from "../models/user.model.js";
import env from "./env.js";
import logger from "./logger.js";
import PasswordUtil from "../utils/password.js";

class SeedAdmin {

    static async seed() {
        try {
            logger.info("Connected to MongoDB for seedadmin user.");
            const adminEmail = env.seed_admin_email;
            const adminPassword = env.seed_admin_password;

            const hashedPassword = await PasswordUtil.hash(adminPassword);

            const existingAdmin = await User.findOne({ identifier: adminEmail });

            if (existingAdmin) {

                logger.info("Admin user already exists. Skipping seeding.");
                return;
            }

            const adminUser = new User({
                name: "Seed Admin",
                identifier: adminEmail,
                password: hashedPassword,
                role: "admin"
            });

            await adminUser.save();
            logger.info("Admin user seeded successfully.");

        } catch (error) {
            logger.error({
                message: "Failed to seed admin user",
                error: error.message,
                stack: error.stack
            });
        }

    }
}

export default SeedAdmin;