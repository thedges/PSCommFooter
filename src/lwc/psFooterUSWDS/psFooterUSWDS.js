import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import USWDS from '@salesforce/resourceUrl/USWDS';

export default class PsFooterUSWDS extends LightningElement {
    @api config;
    @api templateName;

    get isDefault() {
        return (this.templateName == 'USWDS Default' ? true : false);
    }

    get isBig() {
        return (this.templateName == 'USWDS Big' ? true : false);
    }

    get isSlim() {
        return (this.templateName == 'USWDS Slim' ? true : false);
    }

    get isNotSlim() {
        return (this.templateName != 'USWDS Slim' ? true : false);
    }

    get isFacebook() {
        return (this.config && this.config.facebook ? true : false);
    }

    get isTwitter() {
        return (this.config && this.config.twitter ? true : false);
    }

    get isYoutube() {
        return (this.config && this.config.youtube ? true : false);
    }

    get isRSS() {
        return (this.config && this.config.rss ? true : false);
    }

    get isLinkedIn() {
        return (this.config && this.config.linkedin ? true : false);
    }

    get isHome() {
        return (this.config && this.config.home ? true : false);
    }

    get isEmailSignup() {
        return (this.config && this.config.emailSignup ? true : false);
    }

    get isEmail() {
        return (this.config && this.config.email ? true : false);
    }

    get isPhone() {
        return (this.config && this.config.phone ? true : false);
    }

    get emailURL() {
        if (this.config && this.config.email)
        {
          return 'mailto:' + this.config.email;
        }
        return null;
    }

    get phoneURL() {
        if (this.config && this.config.phone)
        {
            return 'tel:' + this.config.phone;
        }
        return null;
    }

    get logoIcon() {
        if (this.config && this.config.logoIcon)
        {
          if (this.config.logoIcon.startsWith('/resource'))
          {
              return '/sfsites/c' + this.config.logoIcon;
          }
          else
          {
              return this.config.logoIcon;
          }
        }
        return null;
    }

    get footerClass() {
        if (this.templateName == 'USWDS Big')
        {
            return ('usa-footer usa-footer--big');
        }
        else if (this.templateName == 'USWDS Slim')
        {
            return ('usa-footer usa-footer--slim');
        }
        else
        {
            return ('usa-footer');
        }
    }

    get primaryFooterStyle() {
      if (this.config.primaryColor1)
      {
          return 'background-color: ' + this.config.primaryColor1;
      }
    }

    get secondaryFooterStyle() {
        if (this.config.secondaryColor1)
        {
            return 'background-color: ' + this.config.secondaryColor1;
        }
    }

    get topicStyle() {
        if (this.config.primaryColor2)
        {
            return 'color: ' + this.config.primaryColor2;
        }
    }

    get linkStyle() {
        if (this.config.primaryColor3)
        {
            return 'color: ' + this.config.primaryColor3;
        }
    }

    get primaryLinkStyle() {
        if (this.config.primaryColor2)
        {
            return 'color: ' + this.config.primaryColor2;
        }
    }

    get emailTextStyle() {
        if (this.config.primaryColor4)
        {
            return 'color: ' + this.config.primaryColor4;
        }
    }

    get primaryLabelStyle() {
        if (this.config.secondaryColor2)
        {
            return 'color: ' + this.config.secondaryColor2;
        }
    }

    get secondaryLabelStyle() {
        if (this.config.secondaryColor3)
        {
            return 'color: ' + this.config.secondaryColor3;
        }
    }

    get secondarySubLabelStyle() {
        if (this.config.secondaryColor3)
        {
            return 'color: ' + this.config.secondaryColor3;
        }  
    }

    get socialStyle() {
        if (this.config.secondaryColor4)
        {
            return 'background-color: ' + this.config.secondaryColor4;
        }  
    }

    connectedCallback() {
        Promise.all([
            loadStyle(this, USWDS + '/css/uswds.min.css')
        ]);
    }
}