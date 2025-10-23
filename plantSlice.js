import { createSlice } from '@reduxjs/toolkit';

// Initial state for the plant products
const initialProducts = [
    { id: 'p1', name: 'Snake Plant', price: 25.00, category: 'Low-Light', thumbnail: 'https://snappyliving.com/wp-content/uploads/2023/05/snake-plant.jpg' },
    { id: 'p2', name: 'Fiddle Leaf Fig', price: 75.00, category: 'High-Light', thumbnail: 'https://www.petalrepublic.com/wp-content/uploads/2020/07/Terrain-Fiddle-Leaf-Fig-Plant-Delivery-2-1024x1024.jpg' },
    { id: 'p3', name: 'Monstera', price: 50.00, category: 'Medium-Light', thumbnail: 'https://gardentherapy.ca/wp-content/uploads/2022/01/monstera-plant-care.jpg' },
    { id: 'p4', name: 'ZZ Plant', price: 30.00, category: 'Low-Light', thumbnail: 'https://www.petalrepublic.com/wp-content/uploads/2020/09/The-Most-Popular-ZZ-Plant-Varieties-e1600090897264.jpg' },
    { id: 'p5', name: 'Pothos', price: 15.00, category: 'Medium-Light', thumbnail: 'https://www.petalrepublic.com/wp-content/uploads/2020/09/The-Most-Popular-ZZ-Plant-Varieties-e1600090897264.jpg' },
    { id: 'p6', name: 'Cactus', price: 10.00, category: 'High-Light', thumbnail: 'https://img.freepik.com/premium-photo/cactus-plant_1001626-1773.jpg' },
]; // (Task 7: Six unique houseplants)

const plantSlice = createSlice({
    name: 'plants',
    initialState: {
        products: initialProducts,
        cartItems: [], // { id, quantity, price }
    },
    reducers: {
        // Task 9: Add to Cart
        addToCart: (state, action) => {
            const { id, price, name, thumbnail } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                // Only allow adding one of each unique item from the product list
                // (The 'Add to Cart' button is disabled in the component)
            } else {
                state.cartItems.push({ id, quantity: 1, price, name, thumbnail });
            }
        },
        // Task 16: Increase button
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if (item) {
                item.quantity += 1;
            }
        },
        // Task 17: Decrease button
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const itemIndex = state.cartItems.findIndex(i => i.id === id);

            if (itemIndex >= 0) {
                const item = state.cartItems[itemIndex];
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Task 18: Delete item if quantity reaches 0 (optional behavior, or use a dedicated delete button)
                    state.cartItems.splice(itemIndex, 1);
                }
            }
        },
        // Task 18: Delete button
        deleteItem: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = plantSlice.actions;

export default plantSlice.reducer;