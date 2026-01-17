import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ItemsContext } from '../contexts/ItemsContext/data';

interface Item {
  id: number;
  name: string;
  price: number;
  amount: number;
}

const Background = styled.div`
  display: flex;
  /* width: 100%; */
  height: 100%;
  padding: 1rem;
  align-items: start;
  justify-content: center;
  background-color: white;
`;

const Container = styled.div`
  width: 400px;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: #f5f5f5;
  /* min-height: 100vh; */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FormSection = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 16px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-top: 0;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 16px;
  }
`;

const SelectionInput = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3d8b40;
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 16px;
  }
`;

const ListSection = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ListTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 0;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const EmptyMessage = styled.p`
  color: #999;
  text-align: center;
  padding: 20px;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 13px;
  }
`;

const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 8px;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemName = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ItemDetails = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemTotal = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #4CAF50;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    text-align: right;
    font-size: 15px;
  }
`;

const RemoveButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #da190b;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const SummarySection = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }
`;

const SummaryItem = styled.div`
  font-size: 14px;
  color: #333;

  @media (max-width: 768px) {
    width: 100%;
    text-align: right;
    font-size: 13px;
  }
`;

const SummaryValue = styled.span`
  font-weight: 600;
  color: #4CAF50;
  margin-left: 8px;
`;

const PrintButton = styled.button`
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #0b7dda;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

const defaultAmount = '1';

export default function ItemForm() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState(defaultAmount);
  const itemsContext = useContext(ItemsContext);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!itemName.trim() || !price || !amount) {
      alert('Preencha todos os campos');
      return;
    }

    const priceNum = parseFloat(price);
    const amountNum = parseInt(amount, 10);

    if (priceNum <= 0 || amountNum <= 0) {
      alert('Preço e a quantidade precisam ser maiores do que 0');
      return;
    }

    const newItem: Item = {
      id: Date.now(),
      name: itemName,
      price: priceNum,
      amount: amountNum,
    };

    itemsContext.addItem(newItem);
    setItemName('');
    setPrice('');
    setAmount(defaultAmount);
  };

  // const handlePrintSummary = () => {
  //   navigate('/print', { state: { items } });
  // };

  const handleProductName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const productName = e.target.value;
    const value = itemsContext.items.find((p) => p.name === productName)?.price;
    if (!value) return;
    setPrice(String(value.toFixed(2)));
    setItemName(productName);
  }

  const totalItems = itemsContext.items.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = itemsContext.items.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <Background>
      <Container>
        <FormSection>
          <Title>Adicionar Produtos</Title>
          <form onSubmit={handleAddItem}>
            <FormGroup>
              <Label htmlFor="items">Produtos</Label>
              <SelectionInput onChange={(e) => handleProductName(e)}>
                {itemsContext.items.map((product) => ((
                  <option>{product.name}</option>
                )))}
              </SelectionInput>
            </FormGroup>
            {/* <FormGroup>
              <Label htmlFor="itemName">Nome do Produto</Label>
              <Input
                id="itemName"
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </FormGroup> */}

            <FormGroup>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="amount">Quantidade</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                defaultValue={Number(amount)}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1"
              />
            </FormGroup>

            <Button type="submit">Adicionar</Button>
          </form>
        </FormSection>

        <ListSection>
          <ListTitle>Produtos</ListTitle>
          {itemsContext.items.length === 0 ? (
            <EmptyMessage>Nenhum produto ainda adicionado.</EmptyMessage>
          ) : (
            <>
              <ItemListContainer>
                {itemsContext.items.map((item) => (
                  <ItemCard key={item.id}>
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemDetails>
                        ${item.price.toFixed(2)} x {item.amount}
                      </ItemDetails>
                    </ItemInfo>
                    <ItemTotal>R${(item.price * item.amount).toFixed(2)}</ItemTotal>
                    <RemoveButton onClick={() => itemsContext.removeItem(item.id)}>
                      Remover
                    </RemoveButton>
                  </ItemCard>
                ))}
              </ItemListContainer>

              <SummarySection>
                <SummaryItem>
                  Total de items: <SummaryValue>{totalItems}</SummaryValue>
                </SummaryItem>
                <SummaryItem>
                  Valor total: <SummaryValue>R${totalPrice.toFixed(2)}</SummaryValue>
                </SummaryItem>
                <PrintButton onClick={() => { alert("Novo método para ser feito") }} disabled={itemsContext.items.length === 0}>
                  🖨️ Imprimir Resumo
                </PrintButton>
              </SummarySection>
            </>
          )}
        </ListSection>
      </Container>
    </Background>
  );
}
