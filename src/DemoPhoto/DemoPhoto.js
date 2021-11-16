import React from "react"
import { observer } from 'mobx-react-lite';
import { InputGroup } from '@blueprintjs/core';
import { SectionTab } from 'polotno/side-panel';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { getImageSize } from 'polotno/utils/image';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
export const PhotoPanel = observer(({store}) => {
    //tạo useState lưu trư hình
    const [images, setImages] = React.useState([]);
    
    //call api
    async function loadImage() {
        await new Promise((rs) =>setTimeout((rs), 3000));
        //thêm await để call api từ backend
        //const rs=await api();


        setImages([
            { url: "https://www.ladify.nl/wp-content/uploads/2020/11/carlos-lindner-zvZ-HASOA74-unsplash-scaled.jpg" },
            { url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhMVFhUQFRAVEBUVFRUVFQ8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA+EAACAQIDBQYDBgQEBwAAAAAAAQIDEQQSIRMxQVFhBRRxgZGhBgciMlKxwdHwI5Lh8RVCYnJUY4KDorLC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACURAAICAgEEAgMBAQAAAAAAAAABAhEDEiETMUFRMmEEInFSM//aAAwDAQACEQMRAD8A7ScSGU1dh0Jw7NuZo2bJTRkxphoUWaNTBKJGGhIjt6KuxaJKDLD1GygKyEEHhOxBQJKkwsGgqrk41UCWHYlRfIewqRap1Ik41VcqKkyWyCyOppWTQLZgKNRotKtcbZHVoq1KEgEqUlwL2dj7XmIabM1xZGzNTNBk4wiKie/0ZOo6RpzpRe4jHDojqx7oz7CNZYaI3dYhoxdRGXYkkzT7tElsohow6iMoc0+7xGlhkw1Y+ojPUh4vVeRalhUgSparxRFpjTTPlYQhGozH1fsVyISovgwjZGM2U2TpgVhrvUlKikWbilC4wKMYIJ3dMN3YUY2IkrBKgkStELKkmCeEJEf6EhUiPniBjhgcotCsaSLipxZCVFFTOyazMNkPVlhUokJTSFTpBNkhWFAVUTCTgrEtgS2dgDgpSpiUGX7dCUV0FTHsUE5IWaRpOKG2aHqxbr0UdtIZOXUvqCHyhq/Yt16M/wCobJLqaWUbKg1Y9/ozvq6k4VJF5xBzpC1aDdME5k6bV0QlRYoJ3XihWx0j5OHGHNJRyfWWUkojDooLBWHEOiQDjOA44CohkJWFccA5ByiwEsO2WrjiGiqsPYeMbFhshvFQ7IKSCxkgWVE0kKwCjZhkSJERXHIuSISqpDsKCiKu3ZNVBboejDiK7xEVe8ksqvK7Syrm+SM2fxbgE7PF0Lv/AJkX7pgnYtWbQ4DDYynUjmpzhOL0UoSUlfldMK5DsVEhgTbIOMuZFyJKIdtEU1cGqTHjR1RG2/A6Xs+SxCEaSo+siRBMkZbLaJCGHuOxCHGEOwHHIj3ACQiNxXHYD2FlFcVxAM4ISghxwCxDjCCwIuAzpomIB2C2KML417b7jhZ1lBzl9mOtlFvRSk/FrTidFc81+eePUcLQo8a1Zy8IUou/vOPuKkShzJI8l7U7drV5ynVqTnKWjbbso3uoxjuilyRnPEPmVpSGTLVL0bNEb3YHxDWwtSNSlOzi75X9mS4qUeKdl6H0V8K9uQxuGhXha8tKkU77Oot8fz8z5YUz2L5B15NYyLf0fwWlyn9Sb9LehXJ8kMsLg36PXRDCFZjJCQ1xIdiPkYQhzQRPq4kiI6MVlxIe4w47Ae4rjWHsFiFcVxWHsFgK4hWFYLAQhWEOwEPcSQ9gsQ1xXFYVgsBJkiNh7BYDnlfz7gthhJX1VSrG3NOCbfllXqepnm/zz7PlUwlCpCLlsq1pWV7RnBq9l1jFeY0yzD80jwaQ1yVSNnYgSNzJXPWvkJiYKtiabbz1KcJR0VssJWlrff8AXHS3M8lij2f5KfDValOeLq03GNSjBYdtr+JGo1JySTvujHf94jIU2ljlfo9csPYZDis5ghIYdBYHyIIcRrIn1ikPYGpDqRzlI0UFTFcHnFnJbCoJce4LMLMGwUFuK4LMLMGwUFuK4K4rjsVBbiuCuPmDYKCXFcHmFcLCglx7griCw1CXFcHccLFQS4HGYinTpznVlGNOMW6jk7RUeNx5ySTbaSWrbdkl1Z5h81fialVpU8PQqKqs7lX2bzR+m2SLluerbsvuonCLk6HR5r2/2dQ21RUKjnTUns55Gs0N8U1Kzut1+Nr8TNXZP+p/y/1Lu0g9G5J8noPOLXVeJtWKJa8s/ZWh2VFb3J+iPSOw/mRiaEIUpUaU6dKMYRSUoSUYpJfVdrhyPPJUb7pNeJB0qy3O/mDhH/JFty4bPcV80sGqalKFXPxpxUZWfSbaTX7sUH83aP8Aw1T+eH6HjbnVW9exKnnbKunH0NY0fT3ZHaUMRRpV6d8tWKkk965p9U7ryLkWcl8rm/8ADcPfg66XVKtM6xGRunRVJKz5JHEI3lR9UEkwCrx5klWXM5KZtphxAHXjzF3mPMeyFqw4gMcRF8R9vHmFoWrCj3APEx5jd6jzDZBqyzcRW71HmP3qPMNl7DRlgQBYmPMfvMeYbIWrDCA95jzG71HmPdew1ZYuK5X71HmP3mPMN0GrDpgcdjIUac6tR5YU4uUn0XLm+g3eI8ziPm52llwkKUXrWqrMucIJyf8A5ZCeP9pJCcWcP8VfF1bGTak7UU3s6S0SV9HJL7Uur3cDAlVKUpijUOrFqKpEXEPUaas0vMrSUo/Z1XLivAJtB1IHyCdAFXT8R1VaJVaMZePPiVZxlHqvcg7RONMt7e3ELhq+eUY33tdG1fcnwZmQqRejD4aMVJNX0aflci5NrgnGKi7Z9M/DMqfdKGySUI04xUVf6ZR+mSd97Uk9eO81IvVHmfys7Ty068Zyk1KUZxvdxu7qeXlra6/U7yPalPTVcDlzksctG+URljk3aXDPlsca4jp2ZNT3aNeXNhI4iXNmV3nUk8UcrRHdo1Nq+Ytr1M3vI/eVzJKBBmmqr5jqr1Mfvgu99R9MVGxtepJVDI72uZB4t8GLpjNedaw7q3RkVK7e9jQrPmCh7HSNunVS4ku8Ixs7fEi61t7DpC4NqOLQ/fEZUZpreDjPqHTVhRs99Qz7QRlRd9xCcraC6aBRRrvtE4T5m4zP3eNtyqv1yr8jpItnF/MNWnRfOElblaX9fYu/HjWRFeZLR0ck5EcxCUgM6uvQ3uRmUbLKmETZXhV5Jv2QVTvwsSTISQa7EyCYmyRAhPDp70EpRiugymPdCpDtnT/BmLlTxEUn9NVOM4342vGaXisv/Uj0FYjVHm/wRO2ItlunGTTe+Elua9WvNHdZ9Tk/mwvLZ0vxf+Z4sMIR0DknqKrdRKuZcZsLGTMWp3mjR23UFPEFZNilEnGJTJpFjbjrEFOTbCUdxZoQUkWXVY3egE6nAZRFoPau5b70ycK7YPZJJEtlpdMOmLdF2ji7A8TVUmZqk9R4yYOI413ReinzJfVzKqrMJt1beLUdlilWcXe4WVa7uZsXcJC6IvGrslsaUMRY4b47xGbERX3acV5tt/odZHEaHEfF7/jt84wftb8izEv2KM/xMCbBRX1ak5sFTl9Rcyhdi7Faaa/iOmDUb6r+w6nz9SxEGFTJQkDQzZIhQWpEgpEqVXgO0nrHzXIYvo6D4Jl/HbW5U5X/ANN3G1zttpqcN8GUZOu5RTyZJKb4XvGy8b6+R2rjuOfnjc2zo/jNKB4+IVhGs5Vo7+lUi5BMRWjfQzosnlMqO46LaxA/eUVFFkp0G0ST5IyjFoNSxKzdDQqdowtovYxKVNp6irS5MvMzirLE8Q23YadZ8yODjrqWZUotkowfcozZor9S1g4yqLeLFuUFv0IUqmTSLKXaGKlJWYOKQoZHPhEqdfM7ItRjJGPhptamhHEvmVyaL4KSVFyUG0Bikt7BvEPiyvUlfURYk/ZZnicrJvtAyatQGpEWTSRv4evc5D4tmtvo90Y36O70OiwUrHO/FFL+Nmt9qKfi1dP8BwXJTm4RhSYOj9rfYnJEKK+rXkT8lPguOLWqXmmLaL/Mn4r9CK+lb7rl+jFeL3O3iTKwsIxf2ZeTJyi1vQCVJcWiVOs48cy5Mkn7E/oUlyJRnfc7S9pBHGMlePmuQDKh0Kzrvg/EyjCqmrLPG3+7L9WnhlNueJbaMjsKDVCCz503KUW1bIno4eClF+bZfyswy5bZ1MKUYI84GGHNZxrOrhJlijK7B92ki9hKG65mVUdufDAupZh6eKB4ynaVlxCwwjcRqmiqbplPG4q60KGdh8RRabAxRejPK0aGDqaBlU1M6OJyBcJirz1JJ+CtwT5ovZ9SnipassTl9em4o45vMKXYljSTJwX0jwr8AFJysO3l3+fgQaLkyzWrpLV2XN6FWXalNaXb8F+pz2OxznJv+VfdiV1WLVGK7maWab+J0j7RpP7/AKRf5hI42i/8zX+6L/8Am5zG1H2jG4wfgis2ReTsKWLhwnF+dvxsZHxJWu4O/B7muZjKqNUqX057yOkVyiTzSkqaK8p9Q+Aje7uBnHcGw2l7efgQUaYnK0WXBp3X9GM7PjboR2rQtomWcEOSSjbkxOw1/MYA7kVJxd0GUlLo/wAQWUbL0BAdr2BbYU7X31FL/dmb/BxNJprUwfhypal/3J/+sDbnir2Mck7f9Z0sXxX8POLiGHNJyODssFiopOKv4O+goY5O6aTTvudtDA2r4P8AH30FCro78fEwKT4PUZIRTs2KeKpqVoRatvXDyLce1W1fRK2ie/8AHU5yNr79yLG3ukrWtv09BLIyiSi+Wi5mc5Xk7vg1deVuROdLUp0qyTtdpu261l5olV7QlGVmtODNeLIqpmLPFthKzSlacXZ31Vn4Ow06Nlni9OW5rlo9Xx9AGLxN5KyV7q3NJ77g41ZfUs2lk7O61vK5FylvfgW8VHVouU8ZllZvW17avQnPNN3e57vDquBSp1IJqVo3vzeml+K/dy5Rxrle/PRJJWjw6jhlcn24JSjHW0uWTw6yt3m3daRdtPYB2nWShPR6xaTtpd6bwFass2um++u/9Cn2piU4KKvwVnrzY4z5ojNx0bfcyLjXGkRuWWYqCZh0wVx7gpBQXOM2RQ9iVgTz2QWhLf8AuxXkSpTsO+QosTlb96ELcvbVehNSTWmpBx8gaBMdRlwV/D9AkJz5Fd3RJYqSEmkDRYvPkM1LjZAO9SJQbbJbJ9iNHW9kSyxjTldOK1T0azNy3eEkWMVicphUsc8yk3dqMIt88qSXskvInjsbnMrT8nTjmjGFIwriIjmg42xdjvDR3DQit7fsO5Lhc5p6zKrHT8bq3oRbfG9/Hfr7BM+tktXb9pirSV9N3le/UEkZJ9hQzLw6CnNLdw5u2vQhJyUX148vAqpb1o7ppX3f0ZZBGPLZYpvM7ZtOX9SVJZnKzvaKtfXNZ2/MoUpfS735INhZJau/LTVrrYtlORQrTtk5SSUrJ3XHk9d9vIp94lvzPUv7J1JNRaSWmaSy3T4tLezUwuCw9NWvGT4yl+S4IsxY5S58CnkiipZOC0a+mKu9zbV93jczO0GrpeZ1UalK1rqy3LgiE40X930Lo4JJ22VzzRa4RxTY1zsZUqPOPoDdKj09CTwv2V7nLUKak7OVuvUlUw7V9U7cv0Z0jhS5+xCVOk+PsR6T9j3RzTTW/QSkb08JRf8AYFLs6l1DpyDZGK5CTNZ9lQ4Sl7EH2XH779ELSQ90ZqkTVZ+PiXv8KX336C/wuP336INJD2RR2/REXUNJdlw+/L2JR7Opc36hpIWyMnMEhI1oYSiuFy5QdGG6PshqDQtkypDCTskoyfk947wVX7kv5Wa9PtSC4P2CrtuH3X7B0kWdRHHiHuIKMhdkxKpYTZBnNSZ7PI4y8h1NK2vB+RKhQnUbtrpf98wVNX4rRc7ajwxDW5v13pAYMkfISvDLo7P108uBnN3Zar1M3Hx11ehTf9yyCMGSrHWr3egSDs+GidivnJRaT1W9e5ZqZ75LM8Q+PJfv3I95AuN0QdMuhJ0QklZaWK6j966lbZobZonsyNIsPFdRPFdStsxtmLaQUg/eRd56gdkhbMLkHAbvPUSxPUEqaE6aC5BwGeK6ke8gtmJU0FsdIN3kXeQGVCcAthwG7yLvILIhZFqK2HBN4kXeCKghZB2xcEu8DPECdNDZEFyDgQhCJGY//9k=' },
            //{url:rs.img}
        ])
        
    };
    
    React.useEffect(()=>{
        loadImage();
        console.log(loadImage());
    },[]);
  
    return(
        <div tyle={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <InputGroup
                 leftIcon="search"
                 placeholder="Search..."
                 onChange={(e) => {
                    loadImage();
                 }}
                 style={{
                   marginBottom: '20px',
                 }}
            />
            <p>Picture</p>
            <ImagesGrid
            draggable
        images={images}
        getPreview={(image) => image.url}
        onSelect={async (image, pos,element) => {
          const { width, height } = await getImageSize(image.url);
          store.activePage.addElement({
            type: 'image',
            src: image.url,
            width,
            height,
            // if position is available, show image on dropped place
            // or just show it in the center
            x: pos ? pos.x : store.width / 2 - width / 2,
            y: pos ? pos.y : store.height / 2 - height / 2,
          });
        }}
        rowsNumber={2}
        isLoading={!images.length}
        loadMore={false}
      />
               {/* {loadingImg()} */}
                {/* <img src="https://images.unsplash.com/photo-1623482599948-194107e83fdc?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"  width="50px" height="50px" atl="123"/> */}

        </div>
    )
});
export const CustomPhotoSection={
    name:"Custom Photos",
    Tab:(props)=>(
        <SectionTab name="Custom Photos" {...props}>
            <MdPhotoLibrary/>
        </SectionTab>
    ),
    Panel:PhotoPanel,
}