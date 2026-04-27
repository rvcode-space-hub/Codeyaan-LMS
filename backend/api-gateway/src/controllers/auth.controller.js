import AuthGateway from "../services/auth.service.js";

class AuthGatewayController {

  // 🔐 REGISTER
  static async register(req, res) {
    try {
      const user = await AuthGateway.register(req.body);

      return res.status(201).json({
        success: true,
        data: user
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // 🔐 LOGIN
  static async login(req, res) {
    try {
      const data = await AuthGateway.login(req.body);

      return res.status(200).json({
        success: true,
        data
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // 👤 GET PROFILE
  static async getProfile(req, res) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized"
        });
      }

      const user = await AuthGateway.getProfile(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      };

      return res.status(200).json({
        success: true,
        data: userData
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // 🧠 DASHBOARDS (RBAC)

  static async superAdminDashboard(req, res) {
    return res.status(200).json({
      success: true,
      message: "Super Admin Dashboard"
    });
  }

  static async adminDashboard(req, res) {
    return res.status(200).json({
      success: true,
      message: "Admin Dashboard"
    });
  }

  static async instructorDashboard(req, res) {
    return res.status(200).json({
      success: true,
      message: "Instructor Dashboard"
    });
  }

  static async studentDashboard(req, res) {
    return res.status(200).json({
      success: true,
      message: "Student Dashboard"
    });
  }
}

export default AuthGatewayController;