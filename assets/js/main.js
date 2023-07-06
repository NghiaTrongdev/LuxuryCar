const menuItems = document.querySelectorAll('.nav-item');
const activeItems = document.querySelectorAll('.active')
console.log(menuItems);
const handleClick = () =>
{
    console.log('')
}
// menuItem.addEventListener('click',handleClick())
menuItems.forEach((menuItem,index)=>
{
    menuItem.addEventListener('click',()=>
    {
       activeItems.forEach((activeItem,index2)=>
       {
            if(index===index2)
            {
                activeItem.classList.add('open')
            }else 
            {
                activeItem.classList.remove('open')
            }
       })
    })
})