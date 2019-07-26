<?php include("../includes/settings.php") ?>
<!DOCTYPE html>
<html>
<head>
    <title>Checkout</title>
    <?php include('../includes/header-imports.php') ?>
</head>
<body>
    <!-- website header[start] -->
    <?php include('../components/shared/header-account.php') ?> 
    <!-- website header[end] -->
    <!-- common loader[start] -->
    <?php include('../components/shared/loader.php') ?>
    <!-- common loader[end] -->
    <main>

    <div class="checkout payment-page">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-12 offset-lg-1 col-lg-6 order-lg-2">  
                        <div class="checkout--order-summary">
                            <div class="order-summary-show-hide-trigger">
                                <div class="row no-gutters">
                                    <div class="col-8">
                                        <h4 class="checkout--order-summary__title" data-open-content="Hide Order Summary" data-close-content="Show Order Summary">Show Order Summary</h4>
                                    </div>
                                    <div class="col-4">
                                        <div class="text-right">
                                            <span class="checkout--order-summary__amount"><i>&#8377;</i> 9000</span>
                                            <span class="checkout--order-summary__direction-icon">
                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-summary-show-hide-block">
                                <div class="order-summary-content">
                                    <div class="order-summary-content--item">
                                        <div class="row no-gutters">
                                            <div class="col-9">
                                                <h4 class="order-summary-content--item__name">
                                                    Orthopedic Memory<br>Foam Mattress
                                                    <span class="order-summary-content--item__count">2</span>
                                                </h4>
                                                <p class="order-summary-content--item__details">King Size,  72”(L) x 60”(W) x 6”(H)</p>
                                            </div>
                                            <div class="col-3">
                                                <div class="order-summary-content--item__amount text-right">
                                                    <i>&#8377;</i> <span>9000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-summary-content--item">
                                        <div class="row no-gutters">
                                            <div class="col-9">
                                                <h4 class="order-summary-content--item__name">
                                                    Wakefit Sleeping Pillow
                                                    <span class="order-summary-content--item__count">2</span>
                                                </h4>
                                            </div>
                                            <div class="col-3">
                                                <div class="order-summary-content--item__amount text-right">
                                                    <i>&#8377;</i> <span>699</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-summary-price-details">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="order-summary-price-details--sub-total">Subtotal</div>
                                            <div class="order-summary-price-details--shipping">Shipping</div>
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="order-summary-price-details--sub-total-amount"><i>&#8377;</i> 9699</div>
                                            <div class="order-summary-price-details--shipping-amount">0</div>
                                        </div>
                                    </div>
                                    <div class="row no-gutters">
                                        <div class="col-7">
                                            <div class="order-summary-price-details--total">Total</div>
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="order-summary-price-details--total-amount"><i>&#8377;</i> 9699</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <a href="#" class="order-summary-shop-more-button">Shop More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Shipment Summary -->
                        <div class="checkout--order-summary shipment-summary--tab-adjuster">
                            <div class="order-summary-show-hide-trigger">
                                <div class="row no-gutters">
                                    <div class="col-8">
                                        <h4 class="checkout--order-summary__title" data-open-content="Hide Shipment Summary" data-close-content="Show Shipment Summary">Show Shipment Summary</h4>
                                    </div>
                                    <div class="col-4">
                                        <div class="text-right">
                                            <span class="checkout--order-summary__direction-icon">
                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-summary-show-hide-block">
                                <div class="order-summary-content">
                                    <div class="order-summary-content--item payment-shadows--standard">
                                        <div class="row no-gutters">
                                            <div class="col-12">
                                                <h4 class="order-summary-content--item__name shipment-summary--title">
                                                    John Doe                                                    
                                                </h4>
                                                <p class="order-summary-content--item__details shipment-summary--content">
                                                    B6146, Prestige Sunrise Park,<br/>
                                                    Neotown road,<br/>
                                                    Street name, City<br/>
                                                    State - 560000
                                                </p>
                                                <a href="#" class="order-summary-shop-more-button">Change Address</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                
                    <div class="col-12 col-lg-5 order-lg-1">
                        <!-- Select Payment -->
                        <form action="">
                            <div class="row no-gutters">
                                <div class="col-12">
                                <h2 class="shipment-summary--title select-payament--title-margin">Select Payment</h2>
                                
                                    <ul class="select-payament">
                                        <li>
                                            <div class="v-center">
                                                <div class="row no-gutters">
                                                    <div class="col-12">
                                                        <input type="radio" id="cards-option" name="selector">
                                                        <label for="cards-option" class="line-height-hook">Netbanking/Debit/Credit Cards</label>
                                                        <span>Visa, Master Card, Amex and more</span>
                                                        <div class="check"><div class="inside"></div></div>
                                                    </div>
                                                </div>
                                            </div>                                 
                                        </li>
                                        <li>
                                            <div class="v-center">
                                                <div class="row no-gutters">
                                                    <div class="col-12">
                                                        <input type="radio" id="wallet-option" name="selector" checked>
                                                        <label for="wallet-option" class="line-height-hook">Wallets</label>
                                                        <span>PayTm, Google Pay, BHIM UPI, Phone Pe</span>
                                                        <div class="check"><div class="inside"></div></div>
                                                    </div>
                                                </div>
                                            </div>   
                                        </li>    
                                        <li>
                                            <div class="v-center">
                                                <div class="row no-gutters">
                                                    <div class="col-12">
                                                        <input type="radio" id="cod-option" name="selector">
                                                        <label for="cod-option" class="line-height-hook">COD</label>
                                                        <span>COD will be available from 3rd July</span>
                                                        <div class="check"><div class="inside"></div></div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row no-gutters ">
                                <div class="col-12 col-lg-6">
                                    <h2 class="shipment-summary--title select-payament--title-margin">Billing Details</h2>
                                    <div class="form-group">
                                        <input type="checkbox" id="sameAsShipping" checked>
                                        <label for="sameAsShipping">Same As Shipping Address</label>
                                    </div>
                                </div>
                                <div class="col-12">

                                    <div class="checkout--shipping-details d-none display-lg-block">
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <label for="">First Name</label>
                                            <input type="text">
                                        </span>
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <label for="">Last Name</label>
                                            <input type="text">
                                        </span>
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <label for="">Address Line 1</label>
                                            <input type="text">
                                        </span>
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <label for="">Address Line 2</label>
                                            <input type="text">
                                        </span>
                                        <span class="checkout--shipping-details__form-field select-box">
                                            <!-- <label for="">City</label> -->
                                            <select name="" id="" class="custom-select-box">
                                                <option value="_">City</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Agra">Agra</option>
                                            </select>
                                        </span>
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <!-- <label for="">State</label> -->
                                            <select name="" id="" class="custom-select-box">
                                                <option value="State">State</option>
                                            </select>
                                        </span>
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <label for="">Pincode</label>
                                            <input type="text">
                                        </span>
                                        <span class="checkout--shipping-details__form-field animated-placeholder">
                                            <!-- <label for="">Country</label> -->
                                            <select name="" id="" class="custom-select-box">
                                                <option value="country">country</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div class="checkout--shipping-details gst-block animated-placeholder">
                                        <span class="checkout--shipping-details__form-field">
                                            <label for="">GST Number(Optional)</label>
                                            <input type="text">
                                        </span>
                                    </div>
                                


                                    <button type="submit" class="checkout--checkout-button payment-margins--bottom-25">Continue Payement</button>
                                </div>
                            </div>
                        </form>

                        <!-- <div class="checkout--wakefit-guarantee d-none display-lg-block">
                            <h5 class="checkout--wakefit-guarantee__title">Wakefit Mattress Guarantee</h5>
                            <h6 class="checkout--wakefit-guarantee__sub-title">Every mattress comes with</h6>
                            <ul class="checkout--wakefit-guarantee--list">
                                <li class="checkout--wakefit-guarantee--list__item">
                                    <h5 class="big-text">100 Nights Free</h5>
                                    <h6 class="small-text">Risk-free returns</h6>
                                </li>
                                <li class="checkout--wakefit-guarantee--list__item">
                                    <h5 class="big-text">10 Years Warranty</h5>
                                    <h6 class="small-text">Best in India</h6>
                                </li>
                                <li class="checkout--wakefit-guarantee--list__item">
                                    <h5 class="big-text">Free Shipping</h5>
                                    <h6 class="small-text">Free door step delivery</h6>
                                </li>
                            </ul>
                        </div> -->
                    </div>    
                </div>    






            </div>








    </div>

    </main>
    <!-- website footer[start] -->
    <?php //include('../components/shared/footer.php') ?>
    <!-- website footer[end] -->
    <!-- scripts[start] -->
    <?php include('../includes/bottom-scripts.php') ?> 
    <!-- scripts[end] -->
    <!-- page dependancy scripts -->
    <script src="<?php echo $assetsurl ?>js/page-js/checkout.js"></script>
    <script type="text/javascript" src="https://use.fontawesome.com/releases/v5.0.1/js/all.js?ver=5.9.0"></script>
</body>
</html>    