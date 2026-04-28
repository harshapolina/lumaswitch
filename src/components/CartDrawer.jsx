import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useToast } from '../hooks/use-toast';

const CartDrawer = () => {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useAppContext();
  const { toast } = useToast();

  const handleCheckout = () => {
    setCartOpen(false);
    clearCart();
    toast({
      title: "Order Confirmed",
      description: "Thank you for your purchase. Your order is being processed.",
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md icw-bg shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#4a181820]">
          <h2 className="font-serif-icw text-2xl icw-text">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} className="icw-text hover:opacity-70 transition-opacity">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center icw-text opacity-70">
              <p className="mb-4">Your cart is currently empty.</p>
              <button 
                onClick={() => setCartOpen(false)}
                className="border border-[#4a1818] px-6 py-2 text-sm hover:bg-[#4a1818] hover:text-[#ede4cf] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-[#4a181810] pb-6">
                <div className="w-24 h-24 bg-[#e6dcc4] flex-shrink-0">
                  <img src={item.images.off} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-medium icw-text text-sm leading-tight">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="icw-text opacity-50 hover:opacity-100 transition-opacity">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs icw-text opacity-70 mt-1">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[#4a181840]">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 icw-text hover:bg-[#4a181810]">
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm icw-text">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 icw-text hover:bg-[#4a181810]">
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-medium icw-text text-sm">
                      ${((parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0) * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#4a181820] p-6 bg-[#4a1818]/5">
            <div className="flex justify-between items-center mb-6">
              <span className="icw-text text-lg">Subtotal</span>
              <span className="font-serif-icw text-2xl icw-text">${cartTotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            </div>
            <p className="text-xs icw-text opacity-60 mb-4">Shipping and taxes calculated at checkout.</p>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#4a1818] text-[#ede4cf] py-4 text-sm font-medium tracking-wide uppercase hover:bg-black transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
