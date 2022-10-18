import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../Models/user";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
    //http://localhost:3000/api/user-information/victor/WubalubaDubDub

    // Query for GET
    console.log("req", req.query)

    // Body for POST
    // console.log("req", req.body)

    let userInfo: User = new User;
    userInfo.UserId = 1;
    userInfo.UserName = "Mattias";
    userInfo.UserTitle = "The Royal Way"
    userInfo.Information = req.query.information.toString()

	res.status(200).json(userInfo);
}