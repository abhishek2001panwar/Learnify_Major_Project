// import express from 'express';
// import Stripe from 'stripe';
// import bodyParser from 'body-parser';

// const stripe = new Stripe('sk_test_51PGeTPSCguAGryJc4akEnnkCU250mKbCiw2qFuC6a6a1LYvFnh3CVNa6yL2yKB5l4cShzu7WjgvZ1Zm2ka9IBk5I00RWVvz3gL');
// const router = express();
// router.use(bodyParser.json());

// router.post('/create-payment-intent', async (req, res) => {
//     const { amount } = req.body;

//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: 'usd',
//         });

//         res.status(200).send({
//             clientSecret: paymentIntent.client_secret,
//         });
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// });

// export {router};
import express from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import cors from 'cors';

const router = express();
const stripe = new Stripe('sk_test_51PGeTPSCguAGryJc4akEnnkCU250mKbCiw2qFuC6a6a1LYvFnh3CVNa6yL2yKB5l4cShzu7WjgvZ1Zm2ka9IBk5I00RWVvz3gL');

router.use(bodyParser.json());
router.use(cors());

router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Course Name',
          },
          unit_amount: 2000, // $20.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:5173/courses',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export {router}