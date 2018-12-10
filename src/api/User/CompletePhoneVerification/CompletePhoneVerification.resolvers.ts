import {
  CompletePhoneVerificationMutationArgs,
  CompletePhoneVerificationResponse
} from "src/types/graph";
import User from "../../../entities/User";
import Verification from "../../../entities/Verification";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    CompletePhoneVerificatio: async (
      _,
      args: CompletePhoneVerificationMutationArgs
    ): Promise<CompletePhoneVerificationResponse> => {
      const { phoneNumber, key } = args;
      try {
        const verification = await Verification.findOne({
          payload: phoneNumber,
          key
        });
        if (!verification) {
          return {
            ok: false,
            error: "Verification key not valid",
            token: null
          };
        } else {
          verification.verified = true;
          verification.save();
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }

      try {
        const user = await User.findOne({ phoneNumber });
        if (user) {
          user.verifiedPhoneNumber = true;
          user.save();
          return {
            ok: true,
            error: null,
            token: "Coming soon"
          };
        } else {
          // Phone 은 인증되었지만 존재하지 않는 사용자일 때, 가입 Form 페이지로 이동
          return {
            ok: true,
            error: null,
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
