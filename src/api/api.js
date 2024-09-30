import axios from "axios";

const backendUrl = "http://localhost:3034/api/user";
// const backendUrl = "https://spegiappbackend.onrender.com/api/user";

export const requestMobileOtp = async (phoneNumber) => {
  try {
    const response = await axios.post(`${backendUrl}/request-mobile-otp`, {
      phoneNumber,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return {
        success: false,
        message: `Server responded with status: ${response.status}`,
      };
    }
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        error: error.response.data || "Unknown server error",
      };
    } else {
      return { success: false, error: error.message };
    }
  }
};

export const verifyMobileOtp = async (phoneNumber, orderId, otp) => {
  try {
    const response = await axios.post(`${backendUrl}/verify-mobile-otp`, {
      phoneNumber,
      orderId,
      otp,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return {
        success: false,
        error: `Server responded with status: ${response.status}`,
      };
    }
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        error: error.response.data || "Unknown server error",
      };
    } else {
      return { success: false, error: error.message };
    }
  }
};

export const getCollegeGroupName = async (dbName, mobileNumber) => {
  try {
    const response = await axios.get(`${backendUrl}/get-college-group-name`, {
      params: {
        dbName,
        mobileNumber,
      },
    });

    if (!response.ok) {
      // Check if response is ok
      return response.data.data; // Adjust for axios, as axios resolves on success status
    } else {
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error) {
    console.error("Error fetching college group name:", error);
    return {
      success: false,
      message: "Failed to fetch college group name",
    };
  }
};

export const getDashboardRecords = async (db_name) => {
  try {
    const response = await fetch(
      `${backendUrl}/get-dashboard-data?db_name=${db_name}`
    );

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dashboard records:", error);
    return { success: false, error: error.message };
  }
};

export const getEnquiryPageData = async (db_name, dateRange) => {
  try {
    const response = await fetch(
      `${backendUrl}/get-enquiry-page-data?db_name=${db_name}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`
    );

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching enquiry page data:", error);
    return { success: false, error: error.message };
  }
};

export const getIncomePageData = async (db_name, dateRange) => {
  try {
    const response = await fetch(
      `${backendUrl}/get-income-page-data?db_name=${db_name}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`
    );

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching income page data:", error);
    return { success: false, error: error.message };
  }
};

export const getExpensePageData = async (db_name, dateRange) => {
  try {
    const response = await fetch(
      `${backendUrl}/get-expense-page-data?db_name=${db_name}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`
    );

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching expense page data:", error);
    return { success: false, error: error.message };
  }
};

export const getAdmissionPageData = async (db_name, dateRange) => {
  try {
    const response = await fetch(
      `${backendUrl}/get-admission-page-data?db_name=${db_name}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`
    );

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching admission page data:", error);
    return { success: false, error: error.message };
  }
};
