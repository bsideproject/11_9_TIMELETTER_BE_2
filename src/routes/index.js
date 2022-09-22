const { Router } = require('express');
import { format } from 'date-fns';


const router = Router()

router.use('/reminder', require('./api/v1/reminder'));

routes.use('/ping', (req, res) => {
    const now = format(new Date(), 'yyyy-MM-dd');
    res.send(`What time is it now?: ${now}`);
});

  
module.exports = router;