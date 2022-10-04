/**
 * 
 * 
 * Variables for input and output
 * 
 * 
 * 
 */
 const radio = document.getElementById("radio-buttons")
 const pricing = document.getElementById("pricing-buttons")

 const residential = document.getElementById("residential-radio")
 const commercial = document.getElementById("commercial-radio")
 const corporate = document.getElementById("corporate-radio")
 const hybrid = document.getElementById("hybrid-radio")
 const outputcontainer = document.getElementById("output")

 const standard = document.getElementById("standard-radio")
 const premium = document.getElementById("premium-radio")
 const excelium = document.getElementById("excelium-radio")



 const apartment = document.getElementById("apartment-box");
 const floors = document.getElementById("floors-box");
 const basements = document.getElementById("basements-box");
 const parking = document.getElementById("parking-box");
 const business = document.getElementById("business-box");
 const c_cages = document.getElementById("c-cages-box");
 const tenant = document.getElementById("tenant-box");
 const occupant = document.getElementById("occupant-box");
 const activity = document.getElementById("activity-box");

 const inputApartments = document.getElementById("apartments");
 const inputFloors = document.getElementById("floors");
 const inputBasements = document.getElementById("basements");
 const inputParking = document.getElementById("parking");
 const inputBusiness = document.getElementById("business");
 const input_c_Cages = document.getElementById("commercial-cages");
 const inputTenant = document.getElementById("tenant");
 const inputOccupant = document.getElementById("occupant");
 const inputActivity = document.getElementById("activity");

 
 const outputFloors = document.getElementById("floors");
 const outputBasements = document.getElementById("basements");
 const outputParking = document.getElementById("parking");
 const outputBusiness = document.getElementById("business");
 const output_elevators = document.getElementById("output-elevators");
 const outputTenant = document.getElementById("tenant");
 const outputOccupant = document.getElementById("occupant");
 const outputActivity = document.getElementById("activity");

const output_price_per_elev = document.getElementById("price-per-elevator")
const output_total = document.getElementById("output-total-price")
const output_fees = document.getElementById("output-installation")
const output_final_pricing = document.getElementById("output-final-price")

function showResidential()
{
    
    apartment.style.display = "block"
    floors.style.display = "block"
    basements.style.display = "block"
    parking.style.display = "none"
    business.style.display = "none"
    c_cages.style.display = "none"
    tenant.style.display = "none"
    occupant.style.display = "none"
    activity.style.display = "none"
    outputcontainer.style.display = "block"

}
function showCommercial()
{
    apartment.style.display = "none"
    floors.style.display = "block"
    basements.style.display = "block"
    parking.style.display = "block"
    business.style.display = "block"
    c_cages.style.display = "block"
    tenant.style.display = "none"
    occupant.style.display = "none"
    activity.style.display = "none"
    outputcontainer.style.display = "block"

}
function showCorporate()
{
    apartment.style.display = "none"
    floors.style.display = "block"
    basements.style.display = "block"
    parking.style.display = "block"
    business.style.display = "none"
    c_cages.style.display = "none"
    tenant.style.display = "block"
    occupant.style.display = "block"
    activity.style.display = "none"
    outputcontainer.style.display = "block"

}
function showHybrid()
{
    apartment.style.display = "none"
    floors.style.display = "block"
    basements.style.display = "block"
    parking.style.display = "block"
    business.style.display = "block"
    c_cages.style.display = "none"
    tenant.style.display = "none"
    occupant.style.display = "block"
    activity.style.display = "block"
    outputcontainer.style.display = "block"

}
function hideAll()
{
    apartment.style.display = "none"
    floors.style.display = "none"
    basements.style.display = "none"
    parking.style.display = "none"
    business.style.display = "none"
    c_cages.style.display = "none"
    tenant.style.display = "none"
    occupant.style.display = "none"
    activity.style.display = "none"
    outputcontainer.style.display = "none"

}
function clearAll()
{
    inputApartments.value = ""
    inputFloors.value = ""
    inputBasements.value = ""
    inputParking.value = ""
    inputBusiness.value = ""
    input_c_Cages.value = ""
    inputTenant.value = ""
    inputOccupant.value = ""
    inputActivity.value = ""
    output_elevators.value = " "
    output_price_per_elev.value = " "
    output_total.value = " "
    output_fees.value = " "
    output_final_pricing.value = " "
}
function getResidentialElevators()
{

    var averageApartmentNum = Math.ceil((+inputApartments.value) / (+inputFloors.value));
    var shafts = Math.ceil(averageApartmentNum / 6);
    var columns = Math.ceil(inputFloors.value / 20);
    console.log(shafts * columns);
    output_elevators.value = (shafts * columns);
    checkPricing();
    getNewPricing()
}

function getCommercialElevators()
{
            output_elevators.value = input_c_Cages.value;
        
           checkPricing();
           getNewPricing();
}
function getElevators()
{
    var totalFloors = (+inputFloors.value) + (+inputBasements.value)
    var ocperfloor = (+inputOccupant.value) * totalFloors;
    var shafts = Math.ceil(ocperfloor / 1000);
    var columns = Math.ceil(totalFloors / 20);
    var elevatorpercolumn = Math.ceil(shafts / columns);
    output_elevators.value = elevatorpercolumn * columns; 
    checkPricing();
    getNewPricing();
}
pricing.addEventListener('click', function(){})
function checkPricing()
{
    

        if(standard.checked)
        {
            standardPricing();
        }
        else if(premium.checked)
        {
            premiumPricing();
        }
        else if(excelium.checked)
        {
            exceliumPricing();
        }
        else
        {
            standardPricing();
        }

    
}
function getNewPricing()
{
    pricing.addEventListener('click', function()
    {
        if(standard.checked)
        {
            standardPricing();
        }
        else if(premium.checked)
        {
            premiumPricing();
        }
        else if(excelium.checked)
        {
            exceliumPricing();
        }
        else
        {
            standardPricing();
        }
    })
}

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    
  });


function standardPricing()
{
    var price = 7565;
    var tempTotal = Number(output_elevators.value) * Number(7565);
    var tempFinal = (+tempTotal + ((+tempTotal) * (+.1)));
    output_price_per_elev.value = formatter.format(price);
    output_total.value = formatter.format(tempTotal);
    output_fees.value = (.1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})
    output_final_pricing.value = formatter.format(tempFinal);

}
function premiumPricing()
{
    var price = 12345;
    var tempTotal = Number(output_elevators.value) * Number(12345);
    var tempFinal = (+tempTotal + ((+tempTotal) * (+.13)));
    output_price_per_elev.value = formatter.format(price);
    output_total.value = formatter.format(tempTotal);
    output_fees.value = (.13).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})
    output_final_pricing.value = formatter.format(tempFinal);


}
function exceliumPricing()
{
    var price = 15400;
    var tempTotal = Number(output_elevators.value) * Number(15400);
    var tempFinal = (+tempTotal + ((+tempTotal) * (+.16)));
    output_price_per_elev.value = formatter.format(price);
    output_total.value = formatter.format(tempTotal);
    output_fees.value = (.16).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})
    output_final_pricing.value = formatter.format(tempFinal);

}


hideAll();


 radio.addEventListener('click', function(){
    if(residential.checked)
    {
        showResidential();
        inputFloors.addEventListener('input', function()
        {
            
            getResidentialElevators();
        })
    
        inputApartments.addEventListener('input', function()
        {
            
            getResidentialElevators();
        })
        clearAll();
    }
        else if(commercial.checked)
        {
            showCommercial();
            
           input_c_Cages.addEventListener('input', function()
           {
               getCommercialElevators();
           })
         
           clearAll();
           
        }
        else if(corporate.checked)
        {
            showCorporate();
            inputFloors.addEventListener('input', function()
            {
                
                getElevators();
            })
            inputBasements.addEventListener('input', function()
            {
                getElevators();
            })
            inputOccupant.addEventListener('input', function()
            {
                getElevators();
            })
            clearAll();
            
        }
        else if(hybrid.checked)
        {
            showHybrid();
            inputFloors.addEventListener('input', function()
            {
                
                getElevators();
            })
            inputBasements.addEventListener('input', function()
            {
                getElevators();
            })
            inputOccupant.addEventListener('input', function()
            {
                getElevators();
            })
            clearAll();
            
        }
        else{
            hideAll();
            clearAll();
            

        }
    })



 
    
    inputBasements.addEventListener('input', function()
    {
        //outputBasements.value = inputBasements.value;
    })

   
    inputParking.addEventListener('input', function()
    {
        outputParking.value = inputParking.value;
    })
    inputBusiness.addEventListener('input', function()
    {
        outputBusiness.value = inputBusiness.value;
    })
    inputTenant.addEventListener('input', function()
    {
        outputTenant.value = inputTenant.value;
    })
    
    inputActivity.addEventListener('input', function()
    {
        outputActivity.value = inputActivity.value;
    })


