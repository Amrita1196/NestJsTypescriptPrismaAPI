import { Client, PrivateKey, AccountBalanceQuery, Hbar } from "@hashgraph/sdk";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import express, { Request, Response } from "express";
const app = express();



//Loading values from environment file
dotenv.config();



// Hedera testnet account ID and private key|| "";from .env file
const myAccountId = process.env.MYACCOUNT_ID || "";
const myPrivateKey = process.env.MYACCOUNT_PVKEY || "";
app.use(bodyParser.json());
console.log(myAccountId);
// creating connection from hedera network using Testnet
const client = Client.forTestnet();
client.setOperator(myAccountId, myPrivateKey);


app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

interface BalanceRequest {
    accountId: string;
}

app.post('/hbar/balance', async (req: Request<{}, {}, BalanceRequest>, res: Response) => {
    try {
        const { accountId } = req.body;
        console.log(accountId);

        // Create a new Hedera client
        const client = Client.forTestnet(); // Replace with your desired network configuration

        // Fetch the account balance
        const query = await new AccountBalanceQuery()
            .setAccountId(accountId);

        //Submit the query to a Hedera network
        const accountBalance = await query.execute(client);

        // Extract the balance in Hbars and convert it to a string
        const bal = accountBalance.hbars.toString();;

        //Print the balance of hbars
        console.log("The hbar account balance for this account is " + accountBalance.hbars);

        return res.status(200).json({ bal });
    } catch (error) {
        console.error("Error fetching Hbar balance:", error);
        return res.status(500).json({ error: "Error fetching Hbar balance" });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));