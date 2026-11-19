export function closeHesabdarModal() {
  document.getElementById('hesabdarCustomerModal')?.classList.add('hidden');
  document.getElementById('hesabdarProductModal')?.classList.add('hidden');
}

export function openHesabdarModal(type) {
  closeHesabdarModal();
  if (type === 'customer') {
    const modal = document.getElementById('hesabdarCustomerModal');
    if (modal) modal.classList.remove('hidden');
  } else if (type === 'product') {
    const modal = document.getElementById('hesabdarProductModal');
    if (modal) modal.classList.remove('hidden');
  }
}
