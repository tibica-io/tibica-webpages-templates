let textColor = '#ffffff'
let socialLinks = {
    "facebook-input": {
        id: "facebook",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/fb.png`,
        initialLink: "https://www.facebook.com"
    },
    "linkedin-input": {
        id: "linkedin",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/ln.png`,
        initialLink: "https://www.linkedin.com"
    },
    "twitter-input": {
        id: "twitter",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/tw.png`,
        initialLink: "https://www.twitter.com"
    },
    "github-input": {
        id: "github",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/gh.png`,
        initialLink: "https://www.github.com"
    },
    "youtube-input": {
        id: "youtube",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/yt.png`,
        initialLink: "https://www.youtube.com"
    }
};
let contactsLinks = {
    "phone-input": {
        id: "phone",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/phone.png`,
        initialLink: "tel:+12 345 678 90"
    },
    "email-input": {
        id: "email",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/email.png`,
        initialLink: "mailto:serena@example.com"
    },
    "website-input": {
        id: "website",
        icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/web.png`,
        initialLink: "https://mywebsite.com"
    }
};
const colors ={ "#000000": { "colorName": "Black", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#545454": { "colorName": "Grey", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#737373": { "colorName": "Medium Grey", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#a6a6a6": { "colorName": "Light Grey", "textColor": "#000000", "iconColor": "#545454" }, "#d9d9d9": { "colorName": "Very Light Grey", "textColor": "#000000", "iconColor": "#737373" }, "#55bc6c": { "colorName": "Green", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#82dee4": { "colorName": "Light Cyan", "textColor": "#000000", "iconColor": "#545454" }, "#60b4f9": { "colorName": "Light Blue", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#1d49a7": { "colorName": "Royal Blue", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#5429e1": { "colorName": "Purple", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#fade70": { "colorName": "Light Yellow", "textColor": "#000000", "iconColor": "#737373" }, "#f5bf6a": { "colorName": "Orange", "textColor": "#000000", "iconColor": "#545454" }, "#f1965c": { "colorName": "Peach", "textColor": "#000000", "iconColor": "#737373" }, "#eb473e": { "colorName": "Red", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#ed72c0": { "colorName": "Pink", "textColor": "#FFFFFF", "iconColor": "#E9EBEF" }, "#ffffff": { "colorName": "White", "textColor": "#000000", "iconColor": "#545454" } }
const content = document.getElementById('content')
const loader = document.getElementById('loader')
const mainContainer = document.getElementById('main-container')
const mainTable = document.getElementById('main-table')
const contentRow= document.getElementById('content-row')
const mainRow = document.getElementById('main-row')
const logoTable = `<table id="logo-table" style="border-collapse:collapse;width:100%" cellpadding="0" cellspacing="0" width="100%">
																<tr>
																	<td style="padding:.01px 14px .01px 1px;vertical-align:top" align="left" valign="top">
																		<img id="logo" alt="logo" border="0" height="22" src="${window.location.origin}/images/logos/company-example.png" style="vertical-align:middle;height:22px;border:0;display:block">
																	</td>
																</tr>
															</table>`

const avatarTable = `<td id="avatar-cell" style="padding:20px 0 0 0;vertical-align:top;width:66px">
																		<img id="avatar" alt="photo" border="0" height="66" src="${window.location.origin}/images/avatars/frog.png" style="width:66px;vertical-align:middle;border-radius:50%;height:66px;border:0;display:block" width="66">
																	</td>`

const disclaimerDividerRowHTML = `<tr id="disclaimer-divider">
								<td style="font-size:1px;height:16px;line-height:0"></td>
							</tr>`

const disclaimerRowHTML = `<tr id="disclaimer-row">
								<td>
								   <table cellpadding="0" cellspacing="0" style="width:100%;color:gray;border-top:1px solid gray;line-height:normal;">
										<tbody>
											<tr>
												<td style="padding:9px 8px 0 0;">
													<p id="legal-disclaimer" style="color:#888888;text-align:left;font-size:10px;margin:1px;line-height:120%;font-family:Arial "></p>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>`

const functionRegistry = {
    changeLogo: (value) => {
        onChangeLogo(value);
    },
    changeAvatar: (value) => {
        onChangeAvatar(value);
    },
    deleteLogo: () => {
        onRemoveLogo();
    },
    deleteAvatar: () => {
        onDeleteAvatar();
    },
    setColors: () => {
        onSetColors();
    },
    changeTextColor: (value) => {
        onChangeTextColor(value);
    }
};

const onChangeLogo = (value) => {
    if (!document.getElementById('logo-table')) {
        mainContainer.insertAdjacentHTML('afterbegin', logoTable);
        const avatarCell = document.getElementById('avatar-cell');
        const nameCell = document.getElementById('name-cell');
        const contactCell = document.getElementById('contact-cell');

        if (avatarCell) {
            avatarCell.style.padding = '20px 0 0 0';
        }
    
        if (nameCell) {
            nameCell.style.padding = '20px 0 0 15px';
        }
    
        if (contactCell) {
            contactCell.style.padding = '20px 0 0 15px';
        }
    }

    const logo = document.getElementById('logo');
    if (logo) {
        logo.src = `${window.location.origin}/${value}`;
    }

    updateSignature();
}

const onRemoveLogo = () => {
    const logoTable = document.getElementById('logo-table');
    if (logoTable) {
        logoTable.remove();
    }
    const avatarCell = document.getElementById('avatar-cell');
    const nameCell = document.getElementById('name-cell');
    const contactCell = document.getElementById('contact-cell');
    if (avatarCell) {
        avatarCell.style.padding = '0 0 0 0';
    }

    if (nameCell) {
        nameCell.style.padding = '0 0 0 15px';
    }

    if (contactCell) {
        contactCell.style.padding = '0 0 0 15px';
    }

    updateSignature();
}

const onChangeAvatar = (value) => {
    if (!document.getElementById('avatar-cell')) {
        mainRow.insertAdjacentHTML('afterbegin', avatarTable);
        const nameCell = document.getElementById('name-cell');
        const avatarCell = document.getElementById('avatar-cell');

        if (avatarCell) {
            avatarCell.style.padding = document.getElementById('logo-table') ? '20px 0 0 0' : '0 0 0 0';
        }

        if (nameCell) {
            nameCell.style.padding = document.getElementById('logo-table') ? '20px 0 0 15px' : '0 0 0 15px';
        }

    }

    const avatar = document.getElementById('avatar');
    if (avatar) {
        avatar.src = `${window.location.origin}/${value}`;
    }

    updateSignature();
}

const onDeleteAvatar = () => {
    const avatarCell = document.getElementById('avatar-cell');
    if (avatarCell) {
        avatarCell.remove();
    }

    const nameCell = document.getElementById('name-cell');
    if (nameCell) {
        nameCell.style.padding = document.getElementById('logo-table') ? '20px 0 0 0' : '0 0 0 0';
    }

    updateSignature();
}

const onSetColors = () => {
    textColorSelect.querySelector('.select-options').innerHTML = Object.keys(colors).map(colorCode => {
        const color = colors[colorCode];
        return `
          <div class="select-option color-option" data-value="${colorCode}">
            <div class="color-preview" style="background-color: ${colorCode};"></div>
            ${color.colorName}
          </div>
        `;
      }).join('');
}

const onChangeTextColor = (value) => {
    const allText = mainContainer.querySelectorAll('p');
    const allLinks = mainContainer.querySelectorAll('a');
    const nameCell = document.getElementById('name-cell');
    const contactCell = document.getElementById('contact-cell');

    allText.forEach((text) => {
        text.style.color = value;
    });
    allLinks.forEach((link) => {
        link.style.color = value;
    });

    textColor = value;
    getSocialLinks();
    getContactLinks();

    if (nameCell) {
        
        const icons = nameCell.querySelectorAll('img');
        icons.forEach((icon) => {
            icon.src = icon.src.replace(/\/([0-9a-fA-F]{6})\//, `/${value.replace('#', '')}/`)
        });
    }

    if (contactCell) {
        const icons = contactCell.querySelectorAll('img');
        icons.forEach((icon) => {
            icon.src = icon.src.replace(/\/([0-9a-fA-F]{6})\//, `/${value.replace('#', '')}/`)
        });
    }

    updateSignature()
}

const logoSelect = document.getElementById('logo-select')
const avatarSelect = document.getElementById('avatar-select')
const textColorSelect = document.getElementById('text-color-select')
let avatars;
let logos;

const fetchImages = async () => {
    try {
        const response = await fetch('./images.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.logos) {
            logos = data.logos;
            logoSelect.querySelector('.select-value').innerHTML = 'Select logo';
            if (Object.keys(data.logos).length) {
                logoSelect.querySelector('.select-options').innerHTML = Object.values(data.logos).map((value) => `<div class="select-option" data-value="${value}">${value}</div>`).join('');
            } else {
                logoSelect.querySelector('.select-options').innerHTML = '<div class="select-option" data-value="">Not logos uploaded</div>';
            }
        } else {
            logoSelect.querySelector('.select-value').innerHTML = 'logos folder not found';
        }

        if (data.avatars) {
            avatars = data.avatars;
            avatarSelect.querySelector('.select-value').innerHTML = 'Select avatar';
            if (Object.keys(data.avatars).length) {
                avatarSelect.querySelector('.select-options').innerHTML = Object.values(data.avatars).map((value) => `<div class="select-option" data-value="${value}">${value}</div>`).join('');
            } else {
                avatarSelect.querySelector('.select-options').innerHTML = '<div class="select-option" data-value="">Not avatars uploaded</div>';
            }
        } else {
            avatarSelect.querySelector('.select-value').innerHTML = 'avatars folder not found';
        }
    } catch (error) {
        avatarSelect.querySelector('.select-value').innerHTML = 'Error loading avatars';
        logoSelect.querySelector('.select-value').innerHTML = 'Error loading logos';
        console.error('Error fetching JSON:', error);
    }
};

const nameInput = document.getElementById('name-input')
const positionInput = document.getElementById('position-input')
const backgroundColorInput = document.getElementById('background-color')
const legalDisclaimerInput = document.getElementById('legal-disclaimer-textarea')

const name = document.getElementById('name')
const position = document.getElementById('position')
const legalDisclaimer = document.getElementById('legal-disclaimer')

const signature = document.getElementById('signature')

const textArea = document.getElementById('signature-code')
const configTextArea = document.getElementById('config-code')
const button = document.getElementById('copy-button')
const copyConfigButton = document.getElementById('copy-config')
const downloadConfigButton = document.getElementById('download-config')
const openTabButton = document.getElementById('open-signature')

const updateSignature = () => {
	textArea.value = `<div dir="ltr">${signature.innerHTML.replaceAll(/\n/g, '').replaceAll(/\t/g, '').replaceAll(/\s*(id|class)=['"][^'"]*['"]/g, "").replace(/>\s+</g, '><').trim()}</div>`
    configTextArea.value = generateConfig()
}

const socialLinksRow = document.getElementById('social-links-row');

const getSocialLinks = () => {
    return socialLinks = {
        "facebook-input": {
            id: "facebook",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/fb.png`,
            initialLink: "https://www.facebook.com"
        },
        "linkedin-input": {
            id: "linkedin",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/ln.png`,
            initialLink: "https://www.linkedin.com"
        },
        "twitter-input": {
            id: "twitter",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/tw.png`,
            initialLink: "https://www.twitter.com"
        },
        "github-input": {
            id: "github",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/gh.png`,
            initialLink: "https://www.github.com"
        },
        "youtube-input": {
            id: "youtube",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/yt.png`,
            initialLink: "https://www.youtube.com"
        }
    };
}

const createLinkTD = (inputId, link, isFirst) => {
    const { id, icon } = socialLinks[inputId];
    const padding = isFirst ? "11px 0 0 0" : "11px 0 0 5px";
    return `
        <td id="${id}-td" style="padding:${padding}">
            <a id="${id}" href="${link}" target="_blank">
                <img alt="${id}" border="0" height="16" src="${icon}" style="width:16px;height:16px;border:0;display:inline-block" width="16">
            </a>
        </td>
    `;
}

const updateSocialsLinks = () => {
    let updatedHTML = "";
    let isFirst = true;

    for (const inputId in socialLinks) {
        const inputElement = document.getElementById(inputId);
        const value = inputElement.value.trim();

        if (value) {
            updatedHTML += createLinkTD(inputId, value, isFirst);
            isFirst = false;
        }
    }

    socialLinksRow.innerHTML = updatedHTML;
    updateSignature();
}

for (const inputId in socialLinks) {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener('input', updateSocialsLinks);
}


const contactsLinksColumn = document.getElementById('contacts-links-column');

const getContactLinks = () => {
    return contactsLinks = {
        "phone-input": {
            id: "phone",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/phone.png`,
            initialLink: "tel:+12 345 678 90"
        },
        "email-input": {
            id: "email",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/email.png`,
            initialLink: "mailto:serena@example.com"
        },
        "website-input": {
            id: "website",
            icon: `${window.location.origin}/images/icons/${textColor.replace('#', '')}/web.png`,
            initialLink: "https://mywebsite.com"
        }
    }
}

const createContactsLinkTR = (inputId, link, isFirst) => {
    const { id, icon } = contactsLinks[inputId];
    
    let formattedLink = link;

    switch (id) {
        case "phone":
            formattedLink = `tel:${link.replaceAll(' ', '')}`;
            break;
        case "email":
            formattedLink = `mailto:${link.replaceAll(' ', '')}`;
            break;
        case "website":
            if (!link.startsWith('https://') && !link.startsWith('http://')) {
                formattedLink = `https://${link}`;
            }
            break;
    }

    return `
        <tr>
            <td style="padding:${isFirst ? "0 11px 0 0" : "12px 11px 0 0"}">
                <img alt="${id}" border="0" height="12" src="${icon}" style="width:12px;height:12px;border:0;display:block" width="12">
            </td>
            <td style="padding:${isFirst ? "0 0 0 0" : "12px 0 0 0"}">
                <a id="${id}" href="${formattedLink}" target="_blank" style="font-family:Helvetica;font-size:13px;line-height:100%;font-weight:700;color:${textColor};margin:0;text-decoration:none;display:block">${link}</a>
            </td>
        </tr>
    `;
}

const updateContactsLinks = () => {
    let updatedHTML = "";
    let isFirst = true;

    for (const inputId in contactsLinks) {
        const inputElement = document.getElementById(inputId);
        const value = inputElement.value.trim();

        if (value) {
            updatedHTML += createContactsLinkTR(inputId, value, isFirst);
            isFirst = false;
        }
    }

    contactsLinksColumn.innerHTML = updatedHTML;
    updateSignature();
}

for (const inputId in contactsLinks) {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener('input', updateContactsLinks);
}

nameInput.addEventListener('input', () => {
	name.innerHTML = nameInput.value
	updateSignature()
})

positionInput.addEventListener('input', () => {
	position.innerHTML = positionInput.value
	updateSignature()
})

backgroundColorInput.addEventListener('change', () => {
	mainTable.style.backgroundColor = backgroundColorInput.value
	updateSignature()
})

backgroundColorInput.addEventListener('input', () => {
	mainTable.style.backgroundColor = backgroundColorInput.value
	updateSignature()
})

legalDisclaimerInput.addEventListener('input', () => {
    const disclaimerDivider = document.getElementById('disclaimer-divider');
    const disclaimerRow = document.getElementById('disclaimer-row');

    if (!legalDisclaimerInput.value) {
        if (disclaimerDivider) {
            disclaimerDivider.remove();
        }
        
        if (disclaimerRow) {
            disclaimerRow.remove();
        }
    } else {
        if (!disclaimerRow) {
            contentRow.insertAdjacentHTML('afterend', disclaimerRowHTML);
        }

        if (!disclaimerDivider) {
            contentRow.insertAdjacentHTML('afterend', disclaimerDividerRowHTML);
        }

        const legalDisclaimer = document.getElementById('legal-disclaimer');
        if (legalDisclaimer) {
            legalDisclaimer.innerHTML = legalDisclaimerInput.value;
        }
    }

    textArea.innerHTML = legalDisclaimerInput.value
    updateSignature()
})

button.addEventListener('click', () => {
	navigator.clipboard.writeText(textArea.value)
    createToast("Code copied to clipboard")
})

const generateConfig = () => {
    const data = {
        logo: document.querySelector("#logo-select .select-value").dataset.value ? document.querySelector("#logo-select .select-value").dataset.value.split('/').pop() : null,
        avatar: document.querySelector("#avatar-select .select-value").dataset.value ? document.querySelector("#avatar-select .select-value").dataset.value.split('/').pop() : null,
        name: document.getElementById("name-input").value,
        position: document.getElementById("position-input").value,
        socialsLinks: {
            facebook: document.getElementById("facebook-input").value,
            linkedin: document.getElementById("linkedin-input").value,
            twitter: document.getElementById("twitter-input").value,
            github: document.getElementById("github-input").value,
            youtube: document.getElementById("youtube-input").value,
        },
        contactInformation: {
            phone: document.getElementById("phone-input").value,
            email: document.getElementById("email-input").value,
            website: document.getElementById("website-input").value,
        },
        legalDisclaimer: document.getElementById("legal-disclaimer-textarea").value,
        backgroundColor: document.getElementById("background-color").value,
        textColor: document.querySelector("#text-color-select .select-value").dataset.value,
    };

    return JSON.stringify(data, null, 4);
}

copyConfigButton.addEventListener('click', () => {
    navigator.clipboard.writeText(generateConfig());
    createToast("Config copied to clipboard")
})

downloadConfigButton.addEventListener('click', () => {
    createAndDownloadJsonFile();
})

openTabButton.addEventListener('click', () => {
    openTab()
})

const openTab = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<div dir="ltr">${signature.innerHTML.replaceAll(/\n/g, '').replaceAll(/\t/g, '').replaceAll(/\s*(id|class)=['"][^'"]*['"]/g, "").replace(/>\s+</g, '><').trim()}</div>`);
    newWindow.document.close();
}

function initializeCustomSelect(selectContainer) {
    const selectBox = selectContainer.querySelector('.select-control');
    const selectValue = selectContainer.querySelector('.select-value');
    const optionsContainer = selectContainer.querySelector('.select-options');
    const resetButton = selectContainer.querySelector('.select-reset-button');
    const onChangeFunction = selectContainer.dataset.onchange;
    const onRemoveFunction = selectContainer.dataset.onremove;
    const onSetOptionsFunction = selectContainer.dataset.onsetoptions;
    let selectedOption = null;

    if (onSetOptionsFunction && typeof functionRegistry[onSetOptionsFunction] === 'function') {
        functionRegistry[onSetOptionsFunction]();
    }

    const options = selectContainer.querySelectorAll('.select-option');

    function closeAllSelects(exceptContainer) {
        document.querySelectorAll('.select').forEach(container => {
            if (container !== exceptContainer) {
                const otherOptionsContainer = container.querySelector('.select-options');
                const otherSelectBox = container.querySelector('.select-control');
                if (otherOptionsContainer) otherOptionsContainer.style.display = 'none';
                if (otherSelectBox) otherSelectBox.classList.remove('open');
            }
        });
    }

    selectBox.addEventListener('click', (e) => {
        if (e.target.closest('.select-reset-button')) return;

        closeAllSelects(selectContainer);

        optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
        if (optionsContainer.style.display === 'block') {
            selectBox.classList.add('open');
        } else {
            selectBox.classList.remove('open');
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('selected'));
            const selectedOptionNode = option.cloneNode(true);
            option.classList.add('selected');

            selectValue.innerHTML = '';
            
            selectedOptionNode.classList.remove('selected', 'select-option');
            selectValue.appendChild(selectedOptionNode);
            selectValue.dataset.value = option.dataset.value;

            if (onChangeFunction && typeof functionRegistry[onChangeFunction] === 'function') {
                functionRegistry[onChangeFunction](option.dataset.value);
            } else {
                console.error('Function not found or not defined in registry!');
            }

            optionsContainer.style.display = 'none';
            selectBox.classList.remove('open');

            selectedOption = option;
        });
    });

    document.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!e.target.closest('.select')) {
            optionsContainer.style.display = 'none';
            selectBox.classList.remove('open');
        }
    });

    resetButton?.addEventListener('click', () => {
        selectBox.classList.remove('open');
        optionsContainer.style.display = 'none';

        if (onRemoveFunction && typeof functionRegistry[onRemoveFunction] === 'function') {
            functionRegistry[onRemoveFunction]();
        } else {
            console.error('Function not found or not defined in registry!');
        }

        selectValue.textContent = selectContainer.dataset.placeholder;
        selectValue.dataset.value = "";

        if (selectedOption) {
            selectedOption.classList.remove('selected');
            selectedOption = null;
        }
    });
}

const selectContainers = document.querySelectorAll('.select');

fetchImages().then(() => {
    selectContainers.forEach(container => {
        initializeCustomSelect(container);
    });
    fetchConfig();
})

const fetchConfig = async () => {
    try {
        const response = await fetch('./config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.logo) {
            if (data.logo in logos) {
                const selectElement = document.querySelector(`.select-option[data-value="${logos[data.logo]}"]`);
                if (selectElement) {
                    selectElement.click();
                } else {
                    functionRegistry.deleteLogo();
                }
            } else {
                functionRegistry.deleteLogo();
            }
        } else {
            functionRegistry.deleteLogo();
        }

        if (data.avatar) {
            if (data.avatar in avatars) {
                const selectElement = document.querySelector(`.select-option[data-value="${avatars[data.avatar]}"]`);
                if (selectElement) {
                    selectElement.click();
                } else {
                    functionRegistry.deleteAvatar();
                }
            } else {
                functionRegistry.deleteAvatar();
            }
        } else {
            functionRegistry.deleteAvatar();
        }

        if (data.name) {
            nameInput.value = data.name;
            name.innerHTML = data.name;
        }

        if (data.position) {
            positionInput.value = data.position;
            position.innerHTML = data.position;
        }

        if (data.socialsLinks) {
            const applySocialLinks = (socialLinksConfig, apiResponse) => {
                const socialsLinks = apiResponse || {};
        
                for (const inputId in socialLinksConfig) {
                    const { id } = socialLinksConfig[inputId];
                    const inputElement = document.getElementById(inputId);
        
                    const linkValue = socialsLinks[id];
        
                    if (linkValue && inputElement) {
                        inputElement.value = linkValue;
                    } else if (inputElement) {
                        inputElement.value = "";
                    }
                }
        
                updateSocialsLinks();
            };
            
            getSocialLinks();
            applySocialLinks(socialLinks, data.socialsLinks);
        }
        
        if (data.contactInformation) {
            const applyContactInformation = (contactsLinksConfig, apiResponse) => {
                const contactInformation = apiResponse || {};
        
                for (const inputId in contactsLinksConfig) {
                    const { id } = contactsLinksConfig[inputId];
                    const inputElement = document.getElementById(inputId);
        
                    const linkValue = contactInformation[id];
        
                    if (linkValue && inputElement) {
                        inputElement.value = linkValue;
                    } else if (inputElement) {
                        inputElement.value = "";
                    }
                }
        
                updateContactsLinks();
            };

            getContactLinks();
            applyContactInformation(contactsLinks, data.contactInformation);
        }

        if (data.legalDisclaimer) {
            legalDisclaimerInput.value = data.legalDisclaimer;
            legalDisclaimer.innerHTML = data.legalDisclaimer;
        } else {
            const disclaimerDivider = document.getElementById('disclaimer-divider');
            const disclaimerRow = document.getElementById('disclaimer-row');

            disclaimerDivider?.remove();
            disclaimerRow?.remove();
        }

        if (data.backgroundColor) {
            backgroundColorInput.value = data.backgroundColor;
            mainTable.style.backgroundColor = data.backgroundColor;
        }

        if (data.textColor) {
            if (data.textColor in colors) {
                functionRegistry.changeTextColor(data.textColor);
                const selectElement = document.querySelector(`.select-option[data-value="${data.textColor}"]`);
                if (selectElement) {
                    selectElement.click();
                }
            } else {
                const selectElement = document.querySelector(`.select-option[data-value="#ffffff"]`);
                if (selectElement) {
                    selectElement.click();
                }
            }
        }

        updateSignature();
        deleteLoader()
    } catch (error) {
        console.error('Error fetching JSON:', error);
        updateSocialsLinks();
        updateContactsLinks();
        getContactLinks();
        updateSignature();
        deleteLoader()
    }
};

const deleteLoader = () => {
    loader.remove()
    content.style = ""
}

const notifications = document.querySelector(".notifications")

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Hello World: This is a success toast.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Hello World: This is an error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Hello World: This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Hello World: This is an information toast.",
  },
  random: {
    icon: "fa-solid fa-star",
    text: "Hello World: This is a random toast.",
  },
}

const removeToast = (toast) => {
  toast.classList.add("hide")
  if (toast.timeoutId) clearTimeout(toast.timeoutId)
  setTimeout(() => toast.remove(), 500)
}

const createToast = (text) => {
  const toast = document.createElement("li")
  toast.className = `toast`
  toast.innerHTML = `<div class="column">
                         <span>${text}</span>
                      </div>
                      <button onclick="removeToast(this.parentElement)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`
  notifications.appendChild(toast) 
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}

const createAndDownloadJsonFile = () => {
    const blob = new Blob([generateConfig()], { type: 'application/json' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'tibica email signature config.json';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}