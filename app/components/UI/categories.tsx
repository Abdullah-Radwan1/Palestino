import React from 'react'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import "../../css/categories.css"

const Categories = () => {
  return (
    <div>
<div className="container categories">
<div> <KebabDiningIcon className='cate'/> <h2>Arab food</h2></div>
<div><RamenDiningIcon className='cate'/> <h2>Asian Food</h2></div>
<div><LunchDiningIcon className='cate'/> <h2>burger</h2></div>
<div><LocalPizzaIcon className='cate'/> <h2>Pizza</h2></div>

</div>

    </div>
  )
}

export default Categories