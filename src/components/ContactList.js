import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const [searchName, setSearchName] = useState("");
  const { contactList } = useSelector((state) => state);
  const renderItem = useCallback(() => {
    return contactList.map((el, i) =>
      el.name.includes(searchName) ? (
        <ContactItem key={`contact-${i}`} item={el} />
      ) : null
    );
  }, [contactList, searchName]);
  return (
    <div>
      <SearchBox setSearchName={setSearchName} />
      {renderItem()}
    </div>
  );
};

export default ContactList;
