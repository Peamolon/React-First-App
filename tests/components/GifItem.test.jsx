import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem component test', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('should match snapshot ', () =>{
        const {container} = render( <GifItem title = {title} url = {url} /> );
        expect(container).toMatchSnapshot();
    })

    test('should shoe the image with the required URL', () =>{
        render( <GifItem title = {title} url = {url} /> );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test('should shoe the title on the component', () => { 
        render( <GifItem title = {title} url = {url} /> );
        expect(screen.getByText(title)).toBeTruthy();
     })


})