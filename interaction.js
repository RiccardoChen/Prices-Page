
const toggleBtn = document.querySelector('.toggle');
const monthText = document.querySelector('.month-text');
const yearText = document.querySelector('.year-text');
const pricesNum = document.querySelectorAll('.price-num');
const priceBox = document.querySelectorAll('.price-box');

const addOns = document.querySelector('.add-ons');
const items = document.querySelectorAll('.add-on-item');

const defaultPrices = [24, 39, 79];
const yearlyPrices = [17, 32, 52];

let isYearly = false;
let yearlyInfoDiv = null;

function createYearlyDiv() {
    const div = document.createElement('div');
    div.id = 'content';
    div.textContent = "Billed yearly";
    div.style.fontSize = "1rem";
    div.style.textAlign = "right";
    return div;
}

function updatePrices() {
    const activePrices = isYearly ? yearlyPrices : defaultPrices;

    pricesNum.forEach((element, index) => {
        if (index < activePrices.length) {
            element.textContent = activePrices[index];
        }
    });
}

function updateYearlyInfo() {
    if (isYearly) {
        priceBox.forEach((box, index) => {
            if (!box.querySelector('#content')) {
                const yearlyInfoDiv = createYearlyDiv();
                box.appendChild(yearlyInfoDiv);
            }
        });
    } else {
        priceBox.forEach((box) => {
            const existingDiv = box.querySelector('#content');
            if (existingDiv) {
                existingDiv.remove();
            }
        });
    }
}

function switchOpacityText(){
    const ballTransform = isYearly ? 'translateX(21px)' : 'translateX(0)'; 

    const toggleBall = toggleBtn.querySelector('.toggle-ball');
    if (toggleBall) {
        toggleBall.style.transform = ballTransform;
    }

    const yearOpacity = isYearly ? '1' : '0.65';
    const monthOpacity = isYearly ? '0.65' : '1';

    yearText.style.opacity = yearOpacity;
    monthText.style.opacity = monthOpacity;
}

function changeTest(){
    if(isYearly){
        
        document.querySelector('.offer-title').textContent = "Customize your workflow with add-ons";

        const firstItem = addOns.querySelector('.add-on-item.one');
        addOns.appendChild(firstItem);

        const createA = document.createElement('a');
        createA.href = '#';
        createA.textContent = 'LEARN MORE';

        const currentFirstItem = addOns.querySelector('.add-on-item.two');
        currentFirstItem.querySelector('h3').textContent = "Accounting & Tax Assistant";
        currentFirstItem.querySelector('p').textContent = "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.";
        currentFirstItem.querySelector('.price-part').innerHTML = '$100<div>/YEAR</div>';

        const oldLink = currentFirstItem.querySelector('.text-part a');
        if (oldLink) oldLink.remove();
        currentFirstItem.querySelector('.text-part').appendChild(createA);

        const currentSecondItem = addOns.querySelector('.add-on-item.three');
        currentSecondItem.querySelector('h3').textContent = 'Partners';
        currentSecondItem.querySelector('p').textContent = 'Invite other users for full account access and company management.';
        currentSecondItem.querySelector('.price-part').innerHTML = '$90<div>/YEAR</div>';
        const link = currentSecondItem.querySelector('.text-part a');
        if(link){
            link.remove();
        }
    }else {
        document.querySelector('.offer-title').textContent = "Super charge your work with add-ons";
        
        const threeItem = addOns.querySelector('.add-on-item.three');
        const oneItem = addOns.querySelector('.add-on-item.one');
        addOns.insertBefore(oneItem, addOns.firstChild);
        
        const twoItem = addOns.querySelector('.add-on-item.two');
        twoItem.querySelector('h3').textContent = 'Partners';
        twoItem.querySelector('p').textContent = 'Invite other users for full account access and company management.';
        twoItem.querySelector('.price-part').innerHTML = '$9<div>/MONTH</div>';

        const createA = document.createElement('a');
        createA.href = '#';
        createA.textContent = 'LEARN MORE';

        threeItem.querySelector('h3').textContent = 'Bonsai Tax';
        threeItem.querySelector('p').textContent = 'Track expenses, identify write-offs, and estimate quarterly taxes easily.';
        threeItem.querySelector('.price-part').innerHTML = '$10<div>/MONTH</div>';
        const link =  threeItem.querySelector('.text-part a');
        if(link){
            link.remove();
        }
        threeItem.querySelector('.text-part').appendChild(createA);
        
        const linkToRemove = twoItem.querySelector('.text-part a');
        if (linkToRemove) linkToRemove.remove();

    }   
}


function priceChange() {
    isYearly = !isYearly;
    switchOpacityText();
    updatePrices();
    updateYearlyInfo();
    changeTest();
}

toggleBtn.addEventListener('click', priceChange);




