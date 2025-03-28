var body = document.querySelector('body')

var whio = window.innerHeight
var wwio = window.innerWidth

const False = false
const True = true

var SMD = ''

computerOs = ["win32"]
var IAmOnAComputer = false
for (var os in computerOs)//Making sure that the device is a computer
{
    if (computerOs[os] === navigator.platform.toLowerCase())
    {IAmOnAComputer = true}
}

function searchString(string, char)
{
    count = 0
    li = list(string)
    for (var num in li)
    {
        if (li[num] === char)
        {
            count += 1
        }
    }
    return count
}

function valueInList(value, li)
{   
    valueIsInList = false
    for (var i in li)
    {
        if (li[i] === value)
        {valueIsInList = true}
    }
    return valueIsInList
}

function range(num)
{
    array = []
    number = 0
    while (true)
    {
        if (number === num)
        {break}
        array.push(number)
        number++
    }
    return array
}

function reversed(list)
{
    newList = []
    index = list.length-1
    while (true)
    {
        if (index === -1){break}
        newList.push(list[index])
        index-=1
    }
    return newList
}

function clear_list(list)
{
    while (true)
    {
        if (list.length > 0)
        {
            list.splice(0, 1)
        }
        else{break}
    }
    return list
}

function remove_list_item(list, item)
{
    list.splice(list.indexOf(item), 1)
}

function copy_list(li)
{
    array = []
    for (var i in li)
    {
        array.push(li[i])
    }
    return array
}

function len_of_a_dic(dic)
{
    count = 0
    for (var key in dic)
    {
        count += 1
    }
    return count
}

function copy_dic(dic)
{
    thingi = {}
    for (var key in dic)
    {
        thingi[key] = dic[key]
    }
    return thingi
}

function clearElement(element)
{
    while (element.children.length > 0)
    {
        element.removeChild(element.children[0])
    }
}

function playsound(path, volume=100, type='mp3', backuptype='m4a')
{
    var audio = document.createElement('audio');

    var source1 = document.createElement('source');
    source1.src = path;
    source1.type = "audio/"+type;

    var source2 = document.createElement('source');
    source2.src = path.replaceAll(type, backuptype);
    source2.type = "audio/"+backuptype;

    audio.appendChild(source1);
    audio.appendChild(source2);

    audio.volume = volume/100

    audio.autoplay = true;

    body.appendChild(audio);

}

function max(li)
{
    heightest = li[0]
    for (var i in li)
    {
        if (li[i] > heightest)
        {
            heightest = li[i]
        }
    }
    return heightest
}

function capitalize(string)
{
    fs = string[0]
    fs = fs.toUpperCase()
    li = list(string)
    li.splice(0, 1, fs)
    return(join(li))
}

function min(li)
{
    lowest = li[0]
    for (var i in li)
    {
        if (li[i] < lowest)
        {
            lowest = li[i]
        }
    }
    return lowest
}

function del(string, chars)
{   
    thingithingthing = string
    for (var charNumber in chars)
    {
    char = chars[charNumber]
    thingithingthing = thingithingthing.replaceAll(char, '')
    }
    return thingithingthing
}

function rep(string, chars)
{   
    thingithingthing = string
    for (var charNumber in chars)
    {
    char = chars[charNumber][0]
    thingithingthing = thingithingthing.replaceAll(char, chars[charNumber][1])
    }
    return thingithingthing
}

function random(arg1, arg2=false)
{
    function _one_arg(maxNumber)
    {
        return Math.ceil(Math.random() * maxNumber)
    }
    function _two_arg(minNumber, maxNumber)
    {
        number = _one_arg(maxNumber)
        while (true)
        {
            if (number >= minNumber)
            {
                break
            }
            number = _one_arg(maxNumber)
        }
        return number
    }
    if (arg2 === false)
    {
        return _one_arg(arg1)
    }
    else
    {
        return _two_arg(arg1, arg2)
    }
}

function join_lists(lists)
{
    newList = []
    for (var listIndex in lists)
    {
        for (var itemNumber in lists[listIndex])
        {
            newList.push(lists[listIndex][itemNumber]);
        }
    }
    return newList
}

function join(li, seperator='')
{
    msg = ''
    for (var number in li)
    {
        msg += li[number]+seperator
    }
    return msg;
}

function list(msg)
{
    li = []
    for (var number in msg)
    {
        li.push(msg[number]);
    }
    return li;
}

function abs(num)
{
    if (num > 0)
    {
        return num;
    }
    else
    {
        return num*-1;
    }
}

function checkScrollPosition(container) {
    if (!container || !(container instanceof HTMLElement)) {
        throw new Error("Invalid container element provided.");
    }

    // Check if the scrollbar is at the top
    if (container.scrollTop === 0) {
        return 'top';
    }
    
    // Check if the scrollbar is at the bottom
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        return 'bottom';
    }

    // If neither
    return 'neither';
}

function isOverFlowing(child, parent)
{
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    return (childRect.right > parentRect.right || childRect.bottom > parentRect.bottom || childRect.left < parentRect.left || childRect.top < parentRect.top)
}

function smoothScrollTo(element, duration) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top + start;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Progress from 0 to 1

        // Easing function (easeInOut)
        const ease = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

function getKeyByValue(dict, value)
{
    for (var key in dict)
    {
        if (dict[key] === value)
        {
            return key
        }
    }
}

function checkOverflow(div) {
    return (div.scrollHeight > div.clientHeight || div.scrollWidth > div.clientWidth)
}

function dist(x1, y1, x2, y2)
{
    return distance(x1, y1, x2, y2)
}

function distance(x1, y1, x2, y2)
{   
    var y1 = window.innerWidth-y1
    var y2 = window.innerHeight-y2
    var x = x1- x2;
    var y = y1- y2;
    var absx = abs(x);
    var absy = abs(y);
    var s = absx**2 + absy**2;
    return Math.sqrt(s);
}

function last_item(li)
{
    return li[li.length-1]
}

function hexToRgba(hex, opacity=1.0) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the hex string to get the red, green, and blue values
    let r, g, b;

    // If the hex is 3 digits (e.g., #fff), convert it to 6 digits (e.g., #ffffff)
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        throw new Error('Invalid hex color format');
    }

    // Return the RGBA string
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function lightenHexColor(hex, units = 0) {
    // Ensure the hex code is valid
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        throw new Error('Invalid hex color');
    }
    // Remove the '#' character
    hex = hex.slice(1);
    // Convert 3-digit hex to 6-digit hex
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    // Convert hex to RGB
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);
    // Calculate the factor for lightening based on the number of units
    const factor = units / 255; // Normalize units to a fraction of 255
    // Calculate new RGB values
    const newR = Math.round(r + (255 - r) * factor);
    const newG = Math.round(g + (255 - g) * factor);
    const newB = Math.round(b + (255 - b) * factor);
    
    // Clamp the values to be between 0 and 255
    const clampedR = Math.max(0, Math.min(newR, 255));
    const clampedG = Math.max(0, Math.min(newG, 255));
    const clampedB = Math.max(0, Math.min(newB, 255));
    
    // Convert back to hex and format
    const newHex = `#${((1 << 24) + (clampedR << 16) + (clampedG << 8) + clampedB).toString(16).slice(1).toUpperCase()}`;
    return newHex;
}

function Input(width, height, scale_fitness=screenSize, type='text', parentElement='body', visible=true, x=0, y=0)
{
    this.sprite = document.createElement("input");
    document.querySelector(parentElement).appendChild(this.sprite)
    this.opacity = 100
    this.scale_fitness = scale_fitness
    this.width = width
    this.height = height
    this.font = 'auto'
    this.center = false
    this.visible = visible
    this.sprite.type = type
    this.x = x
    this.y = y
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.style.fontSize = this.height*(wh/this.scale_fitness[1])+'px'
        this.sprite.style.fontFamily = this.font
        if (this.center){this.sprite.style.textAlign = 'center'}
        this.sprite.style.position = 'fixed'
        if (this.sprite.type == 'checkbox' || this.sprite.type == 'radio')
        {

            lowest = min([this.width*(ww/this.scale_fitness[0]), this.height*(wh/this.scale_fitness[1])])
            this.sprite.style.margin = '0px'
            this.sprite.style.width = lowest + 'px'
            this.sprite.style.height = lowest + 'px'
        }
        else
        {
            this.sprite.style.width = this.width*(ww/this.scale_fitness[0]) + 'px'
            this.sprite.style.height = this.height*(wh/this.scale_fitness[1]) + 'px'
        }
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.opacity = -20
        this.sprite.style.transition = "width 2.5s, height 2.5s, left 1.6s, bottom 1.6s cubic-bezier(0.28, 0.7, 0.06, 1.06), opacity 2s"
        if (!this.visible)
        {
            this.sprite.style.bottom = -9000000000+'px'
        }
        this.sprite.style.opacity = this.opacity+'%'
    }
}

function Box(width, height, scale_fitness=screenSize, color='white', parentElement='body', visible=true, x=0, y=0)
{
    this.sprite = document.createElement("div");
    document.querySelector(parentElement).appendChild(this.sprite)
    this.scale_fitness = scale_fitness
    this.width = width
    this.height = height
    this.visible = visible
    this.x = x
    this.borderWidth = 0
    this.borderColor = 'black'
    this.borderBend = 0
    this.y = y
    this.color = color
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.style = 'border-radius: '+this.borderBend+'%;'
        this.sprite.style.position = 'fixed'
        this.sprite.style.width = this.width*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.border = this.borderWidth*(wh/this.scale_fitness[1])+'px solid '+this.borderColor
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.background = this.color
        this.sprite.style.opacity = -20
        this.sprite.style.transition = "width 2.5s, height 2.5s, left 1.6s, bottom 1.6s cubic-bezier(0.28, 0.7, 0.06, 1.06)"
        if (!this.visible)
        {
            this.sprite.style.bottom = -9000000000+'px'
        }
        this.sprite.style.opacity = 20
    }
}

function Select(width, height, scale_fitness=screenSize, parentElement='body', visible=true, x=0, y=0)
{
    this.sprite = document.createElement("select");
    document.querySelector(parentElement).appendChild(this.sprite)
    this.scale_fitness = scale_fitness
    this.width = width
    this.height = height
    this.visible = visible
    this.x = x
    this.y = y
    this.fill = function(array)
    {
        innerHtmlCode = ''
        for (var i in array)
        {
            innerHtmlCode += '<option>'
            innerHtmlCode += array[i]
            innerHtmlCode += '</option>'
        }
        this.sprite.innerHTML = innerHtmlCode
        this.sprite.selectedIndex = -1
    }
    this.clear = function()
    {
        this.sprite.selectedIndex = -1
    }
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.style = 'font-size: ' + this.height*(4/5)*(wh/this.scale_fitness[1])+'px;'
        this.sprite.style.position = 'fixed'
        this.sprite.style.width = this.width*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.opacity = -20
        this.sprite.style.transition = "width 2.5s, height 2.5s, left 1.6s, bottom 1.6s cubic-bezier(0.28, 0.7, 0.06, 1.06)"
        if (!this.visible)
        {
            this.sprite.style.bottom = -9000000000+'px'
        }
        this.sprite.style.opacity = 20
    }
}

screenSize = [1920, 975]

function SPRITE(img, width, height, scale_fitness=screenSize, parentElement='body', visible=true, rotation=0, x=0, y=0)
{
    this.sprite = document.createElement("img")
    document.querySelector(parentElement).appendChild(this.sprite)
    this.scale_fitness = scale_fitness
    this.img = img
    this.sprite.src = this.img
    this.sprite.draggable = false
    this.width = width
    this.height = height
    this.sprite.style.position = 'fixed'
    this.visible = visible
    this.rotation = rotation
    this.opacity = 100
    this.x = x
    this.y = y
    this.forward = function(step)
    {
        var s = -(this.rotation/57.29577951308232)
        var x = Math.cos(s)*step
        var y = Math.sin(s)*step
        this.x += x
        this.y += y
    }
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.style.width = this.width*(ww/this.scale_fitness[0])+'px'
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1])+'px'
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.transform = 'rotate('+this.rotation+'deg)'
        this.sprite.src = this.img
        this.sprite.style.opacity = this.opacity+'%'
        this.sprite.style.userSelect = 'none'
        if (!this.visible)
        {
            this.sprite.style.opacity = '0%'
        }
    }
}

function UsSprite(img, width, height, scale_fitness=screenSize, parentElement='body', visible=true, rotation=0, x=0, y=0, opacity=100)
{
    this.sprite = document.createElement("img")
    document.querySelector(parentElement).appendChild(this.sprite)
    this.scale_fitness = scale_fitness
    this.img = img
    this.scaleWH = true
    this.scaleXY = true
    this.sprite.src = this.img
    this.sprite.draggable = false
    this.width = width
    this.height = height
    this.sprite.style.position = 'fixed'
    this.visible = visible
    this.rotation = rotation
    this.opacity = opacity
    this.x = x
    this.y = y
    this.forward = function(step)
    {
        var s = -(this.rotation/57.29577951308232)
        var x = Math.cos(s)*step
        var y = Math.sin(s)*step
        this.x += x
        this.y += y
    }
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.X = this.x
        this.sprite.Y = this.y
        if (this.scaleWH)
        {
        this.sprite.style.width = this.width*(wh/this.scale_fitness[1])+'px'
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1])+'px'
        }
        if (this.scaleXY)
        {
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        }
        this.sprite.style.transform = 'rotate('+this.rotation+'deg)'
        this.sprite.src = this.img
        this.sprite.style.opacity = this.opacity+'%'
        this.sprite.style.userSelect = 'none'
        if (!this.visible)
        {
            this.sprite.style.opacity = '0%'
        }
    }
}

function Sprite(img, width, height, scale_fitness=screenSize, parentElement='body', visible=true, rotation=0, x=0, y=0, opacity=100)
{
    this.sprite = document.createElement("img")
    document.querySelector(parentElement).appendChild(this.sprite)
    this.scale_fitness = scale_fitness
    this.img = img
    this.scaleWH = true
    this.scaleXY = true
    this.sprite.src = this.img
    this.sprite.draggable = false
    this.sprite.style.transition = "width 2.5s, height 2.5s, left 1.7s, bottom 1.7s, border 2.5s, transform 0.5s, opacity 2.5s"
    this.width = width
    this.height = height
    this.sprite.style.position = 'fixed'
    this.visible = visible
    this.rotation = rotation
    this.opacity = opacity
    this.x = x
    this.y = y
    this.forward = function(step)
    {
        var s = -(this.rotation/57.29577951308232)
        var x = Math.cos(s)*step
        var y = Math.sin(s)*step
        this.x += x
        this.y += y
    }
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.X = this.x
        this.sprite.Y = this.y
        if (this.scaleWH)
        {
        this.sprite.style.width = this.width*(ww/this.scale_fitness[0])+'px'
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1])+'px'
        }
        if (this.scaleXY)
        {
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        }
        this.sprite.style.transform = 'rotate('+this.rotation+'deg)'
        this.sprite.src = this.img
        this.sprite.style.opacity = this.opacity+'%'
        this.sprite.style.userSelect = 'none'
        if (!this.visible)
        {
            this.sprite.style.opacity = '0%'
        }
    }
}

function SSprite(img, width, height, scale_fitness=screenSize, parentElement='body', visible=true, scale=1, x=0, y=0, opacity=100)
{
    this.sprite = document.createElement("img")
    document.querySelector(parentElement).appendChild(this.sprite)
    this.scale_fitness = scale_fitness
    this.img = img
    this.scaleWH = true
    this.scaleXY = true
    this.sprite.src = this.img
    this.sprite.draggable = false
    this.sprite.style.transition = "width 2.5s, height 2.5s, left 1.7s, bottom 1.7s, border 2.5s, transform 0.5s, opacity 2.5s"
    this.width = width
    this.height = height
    this.sprite.style.position = 'fixed'
    this.visible = visible
    this.scale = scale
    this.opacity = opacity
    this.x = x
    this.y = y
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.X = this.x
        this.sprite.Y = this.y
        if (this.scaleWH)
        {
        this.sprite.style.width = this.width*(ww/this.scale_fitness[0])+'px'
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1])+'px'
        }
        if (this.scaleXY)
        {
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        }
        this.sprite.style.transform = 'scale('+this.scale+')'
        this.sprite.src = this.img
        this.sprite.style.opacity = this.opacity+'%'
        this.sprite.style.userSelect = 'none'
        if (!this.visible)
        {
            this.sprite.style.opacity = '0%'
        }
    }
}

function form(url, dic, method='post')
{
    newForm = document.createElement('form')
    newForm.action = url
    newForm.method = method
    for (var key in dic)
    {
        newInput = document.createElement('input')
        newInput.style.display = 'none'
        newInput.name = key
        newInput.value = dic[key]
        newForm.appendChild(newInput)
    }
    body.appendChild(newForm)
    newForm.submit()
}

function CircleSprite(img, width, height, scale_fitness=screenSize, parentElement='body', visible=true, rotation=0, x=0, y=0)
{
    this.sprite = document.createElement("img")
    document.querySelector(parentElement).appendChild(this.sprite)
    this.draggable = false
    this.scale_fitness = scale_fitness
    this.img = img
    this.sprite.src = this.img
    this.sprite.draggable = false
    this.borderWidth = 8
    this.width = width
    this.height = height
    this.visible = visible
    this.rotation = rotation
    this.x = x
    this.y = y
    this.border = true
    this.square = false
    this.cmpsq = false
    this.forward = function(step)
    {
        var s = -(this.rotation/57.29577951308232)
        var x = Math.cos(s)*step
        var y = Math.sin(s)*step
        this.x += x
        this.y += y
    }
    this.update = function (bool=true)
    {   
        if (bool)
        {
            wh = whio
            ww = wwio
        }
        else
        {
            wh = window.innerHeight
            ww = window.innerWidth
        }
        this.sprite.X = this.x
        this.sprite.Y = this.y
        this.sprite.style = 'border-radius: 100%;'
        if (this.square){this.sprite.style = 'border-radius: 10%;'}
        if (this.cmpsq){this.sprite.style='border-radius: 0%;'}
        if (this.border){this.sprite.style.border = this.borderWidth*(wh/scale_fitness[1])+'px solid black'}
        this.sprite.style.transition = "width 2.5s, height 2.5s, left 0.7s, bottom 0.7s, opacity 0.5s, border 2s, transform 0.2s"
        this.sprite.style.position = 'fixed'
        this.sprite.style.width = this.width*(ww/this.scale_fitness[0])+'px'
        this.sprite.style.height = this.height*(wh/this.scale_fitness[1])+'px'
        this.sprite.style.left = this.x*(ww/this.scale_fitness[0]) + 'px'
        this.sprite.style.bottom = this.y*(wh/this.scale_fitness[1]) + 'px'
        this.sprite.style.transform = 'rotate('+this.rotation+'deg)'
        this.sprite.src = this.img
        this.sprite.style.opacity = this.opacity+'%'
        this.sprite.style.userSelect = 'none'
        if (!this.visible)
        {
            this.sprite.style.opacity = '0%'
        }
    }
    this.update()
}

const Darkdivalonia = document.createElement('div')
Darkdivalonia.style.position = 'fixed'
Darkdivalonia.style.background = 'black'
Darkdivalonia.style.bottom = '0px'
Darkdivalonia.style.left = '0px'
Darkdivalonia.style.opacity = '1'
Darkdivalonia.style.opacity = '0%'
Darkdivalonia.style.width = '4000000px'
Darkdivalonia.style.height = '4000000px'
Darkdivalonia.style.transition = 'opacity 1s cubic-bezier(0.25, 0.1, 0, 1.09) 0s'
const textDivlonia = document.createElement('div')
textDivlonia.style = 'border-radius: 10%'
textDivlonia.id = 'textDivlonia'
textDivlonia.style.background = 'white'
textDivlonia.style.bottom = '-3600px'
textDivlonia.style.overflow = 'auto'
textDivlonia.style.transition = 'bottom 2s cubic-bezier(0.28, 0.7, 0.06, 1.06)'
textDivlonia.style.position = 'fixed'
textDivlonia.title = 'Click to put back down'

function AlertDropdown(msg, options, func, flyUp=false, specialOptions=[])
{   
    wh = window.innerHeight
    ww = window.innerWidth
    textDivlonia.onclick = function(){}
    textDivlonia.title = 'Please select an option'
    textDivlonia.style.width = 300*(ww/1920)+'px'
    textDivlonia.style.height = 200*(wh/975)+'px'
    textDivlonia.style.border = 5*(wh/975)+'px solid black'
    textDivlonia.style.left = (ww/2)-(150*(ww/1920))+'px'
    textDivlonia.style.paddingTop = 5*(wh/975)+'px'
    textDivlonia.style.paddingBottom = 5*(wh/975)+'px'
    textDivlonia.style.paddingLeft = 20*(ww/1920)+'px'
    textDivlonia.style.paddingRight = 20*(ww/1920)+'px'
    if (flyUp)
    {textDivlonia.style.bottom = '-3600px'}
    else
    {textDivlonia.style.bottom = (wh/2)-(75*(wh/975))+'px'}
    innerHtmlCode = ''
    for (var i in specialOptions)
    {
        option = specialOptions[i]
        text = Object.keys(option)[0];
        csscode = ''
        for (var stylename in option[text])
        {
            csscode += stylename+':'+option[text][stylename]+';'
        }
        innerHtmlCode += '<option style="'+csscode+'">'
        innerHtmlCode += text
        innerHtmlCode += '</option>'
    }
    for (var i=0; i<options.length; i++)
    {
        innerHtmlCode += '<option>'
        innerHtmlCode += options[i]
        innerHtmlCode += '</option>'
    }
    textDivlonia.innerHTML = '<p id="blaxblaxblaxnotsofast" style="font-weight: bold; color: black; font-size: '+20*(wh/975)+'px;text-align: center">'+msg+'</p>\
    <select id="blaxblaxblaxnotsoslow" style="color: black; font-size: '+20*(wh/975)+'px; width: '+280*(ww/1920)+'px; height: '+30*(wh/975)+'px">'+innerHtmlCode+'</select>'
    body.appendChild(Darkdivalonia)
    body.appendChild(textDivlonia)
    document.querySelector('#blaxblaxblaxnotsoslow').selectedIndex = -1
    setTimeout(function(){Darkdivalonia.style.opacity = '90%';textDivlonia.style.bottom = (wh/2)-(75*(wh/975))+'px';document.querySelector('#blaxblaxblaxnotsoslow').onchange = function(){
        textDivlonia.style.bottom = '-3600px';
        Darkdivalonia.style.opacity = '0%';
        setTimeout(function(){body.removeChild(textDivlonia);body.removeChild(Darkdivalonia)}, 1000)
        func(document.querySelector('#blaxblaxblaxnotsoslow').value)
    }}, 500)
}

function Alert(msg, OnPhone=false, flyUp=false, func=function(){}, WIDTH=380, HEIGHT=300, BORDER=5) 
{
    wh = window.innerHeight
    ww = window.innerWidth
    textDivlonia.title = 'Click to put back down'
    if (OnPhone) {
        textDivlonia.style.width = (ww / 2) + 'px'
        textDivlonia.style.height = (wh / 2) + 'px'
        textDivlonia.style.border = 5 * (wh / 975) + 'px solid black'
        textDivlonia.style.left = (ww / 2) - ((ww / 4)) + 'px'
        textDivlonia.style.paddingTop = 5 * (wh / 975) + 'px'
        textDivlonia.style.paddingBottom = 5 * (wh / 975) + 'px'
        textDivlonia.style.paddingLeft = 20 * (ww / 1920) + 'px'
        textDivlonia.style.paddingRight = 20 * (ww / 1920) + 'px'
    } else {
        textDivlonia.style.width = WIDTH * (ww / 1920) + 'px'
        textDivlonia.style.height = HEIGHT * (wh / 975) + 'px'
        textDivlonia.style.border = BORDER * (wh / 975) + 'px solid black'
        textDivlonia.style.left = (ww / 2) - ((WIDTH / 2) * (ww / 1920)) + 'px'
        textDivlonia.style.paddingTop = 5 * (wh / 975) + 'px'
        textDivlonia.style.paddingBottom = 5 * (wh / 975) + 'px'
        textDivlonia.style.paddingLeft = 20 * (ww / 1920) + 'px'
        textDivlonia.style.paddingRight = 20 * (ww / 1920) + 'px'
    }
    if (flyUp) {
        textDivlonia.style.bottom = '-3600px'
    } else {
        if (OnPhone) {
            textDivlonia.style.bottom = (wh / 4) + 'px'
        } else {
            textDivlonia.style.bottom = (wh / 2) - (150 * (wh / 975)) + 'px'
        }
    }
    if (OnPhone) {
        textDivlonia.innerHTML = '<p id="blaxblaxblaxnotsofast" style="font-weight: bold; color: black; font-size: ' + 30 * (wh / 975) + 'px;text-align: center;">' + msg + '</p>'
    } else {
        textDivlonia.innerHTML = '<p id="blaxblaxblaxnotsofast" style="font-weight: bold; color: black; font-size: ' + 25 * (wh / 975) + 'px;text-align: center;">' + msg + '</p>'
    }
    body.appendChild(Darkdivalonia)
    body.appendChild(textDivlonia)
    setTimeout(function() {
        Darkdivalonia.style.opacity = '90%';
        textDivlonia.onclick = function() {
            textDivlonia.style.bottom = '-3600px';
            Darkdivalonia.style.opacity = '0%';
            setTimeout(function() {
                body.removeChild(textDivlonia);
                body.removeChild(Darkdivalonia);
                func()
            }, 1000)
        }
    }, 500)
}

function Confirm(msg, names, func, flyUp=false, WIDTH=400, HEIGHT=300, BORDER=5)
{   
    wh = window.innerHeight
    ww = window.innerWidth
    textDivlonia.onclick = function(){}
    textDivlonia.title = 'Please click on "'+names[0]+'" or "'+names[1]+'"'
    textDivlonia.style.width = WIDTH*(ww/1920)+'px'
    textDivlonia.style.height = HEIGHT*(wh/975)+'px'
    textDivlonia.style.border = BORDER*(wh/975)+'px solid black'
    textDivlonia.style.left = (ww/2)-((WIDTH/2)*(ww/1920))+'px'
    textDivlonia.style.paddingTop = 5*(wh/975)+'px'
    textDivlonia.style.paddingBottom = 5*(wh/975)+'px'
    textDivlonia.style.paddingLeft = 20*(ww/1920)+'px'
    textDivlonia.style.paddingRight = 20*(ww/1920)+'px'
    if (flyUp)
    {textDivlonia.style.bottom = '-3600px'}
    else
    {textDivlonia.style.bottom = (wh/2)-(75*(wh/975))+'px'}
    textDivlonia.innerHTML = '<p id="blaxblaxblaxnotsofast"\
     style="color: black; font-weight: bold; font-size: '+30*(wh/975)+'px; text-align: center;">\
     '+msg+'</p>\
     <button id="blaxblaxblaxbuttontwo"\
     style="position: absolute; bottom: '+40*(window.innerHeight/975)+'px; right: '+20*(window.innerHeight/975)+'px; background: #e10707;font-family: monospace;font-size: '+30*(wh/975)+'px;\
     ">'+names[1]+'\
     </button><br><button id="blaxblaxblaxbuttonone"\
     style="position: absolute; bottom: '+40*(window.innerHeight/975)+'px; left: '+20*(window.innerHeight/975)+'px;background: #29f469; font-family: monospace;font-size: '+30*(wh/975)+'px;">\
     '+names[0]+'</button>'
    body.appendChild(Darkdivalonia)
    body.appendChild(textDivlonia)
    setTimeout(function()
    {
        Darkdivalonia.style.opacity = '90%';
        textDivlonia.style.bottom = (wh/2)-(75*(wh/975))+'px';
        document.querySelector('#blaxblaxblaxbuttonone').onclick = function (){
            textDivlonia.style.bottom = '-3600px';
            Darkdivalonia.style.opacity = '0%';
            setTimeout(function()
            {
                body.removeChild(textDivlonia);
                body.removeChild(Darkdivalonia)
            }, 1000)
            func(true)
        }
        document.querySelector('#blaxblaxblaxbuttontwo').onclick = function (){
            textDivlonia.style.bottom = '-3600px';
            Darkdivalonia.style.opacity = '0%';
            setTimeout(function()
            {
                body.removeChild(textDivlonia);
                body.removeChild(Darkdivalonia)
            }, 1000)
            func(false)
        }
    }, 500)
}

function scaleAlert()
{}

contition = (!IAmOnAComputer&&window.innerHeight>window.innerWidth)

setTimeout(function ()
{
    if (contition)
    {   
        Alert("For better results, make sure that your device is in Landscape position then press this box or reload this page", true, false, function(){location.reload()})
    }
}, 3500)