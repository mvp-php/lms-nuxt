import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class PaymentPlanService {
 
  getPaymentPlan(){
    return http.get(`/payment-plan/`, { headers: authHeader() });
  }
  
}
export default new PaymentPlanService();
