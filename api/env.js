export default function handler(req, res) {
  res.status(200).json({
    valor: process.env.MI_VARIABLE
  });
}
