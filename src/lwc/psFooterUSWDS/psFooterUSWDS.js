import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import USWDS from '@salesforce/resourceUrl/USWDS';
import BASEPATH from '@salesforce/community/basePath';

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
              //return 'sfsites/c' + this.config.logoIcon;

              var res;
        
              if (window.location.href.indexOf('live-preview') != -1)
              {
                res = '/sfsites/c' + this.config.logoIcon;
              }
              else
                {
                    res = BASEPATH.substring(0, BASEPATH.length - 2) + this.config.logoIcon;
                }


              return res;
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
        /*
        if (this.config.secondaryColor2)
        {
            return 'color: ' + this.config.secondaryColor2;
        }
        */
       if (this.config.primaryColor2)
       {
           return 'color: ' + this.config.primaryColor2;
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

    get linkedinStyle() {
        var style;

        console.log('linkedinStyle BASEPATH=' + BASEPATH);
        console.log('linkedinStyle window.location.href=' + window.location.href);

        var res;
        
        if (window.location.href.indexOf('live-preview') != -1)
        {
          res = '/sfsites/c/resource/USWDS/extras/linkedin.svg';
        }
        /* else
        {
           res = BASEPATH.replace('/s', '/resource/USWDS/extras/linkedin.svg');
        }
        */
        else if (BASEPATH.endsWith('/s'))
        {
           res = BASEPATH.substring(0, BASEPATH.length - 2) + '/resource/USWDS/extras/linkedin.svg';
        }
        console.log('res=' + res);
        //let res = BASEPATH.replace('/s', '/s/sfsites/c/resource/USWDS/extras/linkedin.svg')


        style = 'background-image: url(' + res + '), linear-gradient(transparent, transparent); background-repeat: no-repeat;';

        if (this.config.secondaryColor4)
        {
            style = style + '; background-color: ' + this.config.secondaryColor4;
        }  

        return style;

    }

    get homeStyle() {
        var style;

        var res;
        
        if (window.location.href.indexOf('live-preview') != -1)
        {
          res = '/sfsites/c/resource/USWDS/extras/home.svg';
        }
        /*
        else
        {
           res = BASEPATH.replace('/s', '/resource/USWDS/extras/home.svg');
        }
        */
        else if (BASEPATH.endsWith('/s'))
        {

           res = BASEPATH.substring(0, BASEPATH.length - 2) + '/resource/USWDS/extras/home.svg';
        }
        console.log('res=' + res);

        style = 'background-image: url(' + res + '), linear-gradient(transparent, transparent); background-repeat: no-repeat;';

        if (this.config.secondaryColor4)
        {
            style = style + '; background-color: ' + this.config.secondaryColor4;
        }  
        return style;

    }

    connectedCallback() {
        Promise.all([
            loadStyle(this, USWDS + '/css/uswds.min.css')
        ]);
    }
}
