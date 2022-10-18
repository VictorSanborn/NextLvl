import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../Models/user";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
    //http://localhost:3000/api/user-information/camilla/WubalubaDubDub

    // Query for GET
    console.log("req", req.query)

    // Body for POST
    // console.log("req", req.body)

    let userInfo: User = new User;
    userInfo.UserId = 1;
    userInfo.UserName = "C A";
    userInfo.UserTitle = "The Spicy Way"
    userInfo.Information = req.query.inform.toString()

	res.status(200).json(userInfo);
}