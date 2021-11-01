const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
  <div class="footer-content">
      <img src="img/light-logo.png" class="logo" alt="">
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">mastiff</li>
          <li><a href="#" class="footer-link">shampoo</a></li>
          <li><a href="#" class="footer-link">leash</a></li>
          <li><a href="#" class="footer-link">poo-mat</a></li>
          <li><a href="#" class="footer-link">wee-mat</a></li>
          <li><a href="#" class="footer-link">plate</a></li>
          <li><a href="#" class="footer-link">hanger</a></li>
          <li><a href="#" class="footer-link">crate</a></li>
          <li><a href="#" class="footer-link">giant cage</a></li>
          <li><a href="#" class="footer-link">sit 101</a></li>
          <li><a href="#" class="footer-link">harness</a></li>          
        </ul>
        <ul class="category">
          <li class="category-title">standard</li>
          <li><a href="#" class="footer-link">shampoo</a></li>
          <li><a href="#" class="footer-link">leash</a></li>
          <li><a href="#" class="footer-link">poo-mat</a></li>
          <li><a href="#" class="footer-link">wee-mat</a></li>
          <li><a href="#" class="footer-link">plate</a></li>
          <li><a href="#" class="footer-link">hanger</a></li>
          <li><a href="#" class="footer-link">crate</a></li>
          <li><a href="#" class="footer-link">giant cage</a></li>
          <li><a href="#" class="footer-link">sit 101</a></li>
          <li><a href="#" class="footer-link">harness</a></li>          
        </ul>
      </div>
      
    </div>
    <p class="footer-title">about us</p>
      <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium magni quidem eligendi voluptatum nesciunt nisi! Accusamus maxime cumque labore blanditiis quis, repellendus enim tenetur qui dignissimos similique consequuntur? Architecto numquam quis ipsum laborum accusamus similique animi quae rerum labore, praesentium aliquid, veniam qui omnis ullam obcaecati, explicabo recusandae id excepturi quam voluptatem esse deserunt! Aliquid odio ipsa, reprehenderit porro ullam itaque, voluptatem beatae harum illum nostrum praesentium sequi quos, nesciunt aperiam? Nesciunt veniam quam natus facere ratione, ipsam excepturi aperiam et corporis odit iste consectetur id vitae atque minima esse assumenda porro quibusdam, dolor dolores eveniet nemo quis harum. Impedit voluptas quibusdam neque, nihil vitae repellat perferendis rerum porro, id assumenda optio explicabo similique incidunt odit quia voluptates expedita!</p>
      <p class="info">support emails - help@dpaws.com, customercare@dpaws.com</p>
      <p class="info">tel: +234 852 852 8552, +234 853 853 8553</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
          <a href="#" class="social-link">linkedin</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
          <a href="#" class="social-link">instagram</a>
        </div>
      </div>
      <p class="footer-credit">Your pet's welfare is our ultimate concern</p>
  `;
}

createFooter();