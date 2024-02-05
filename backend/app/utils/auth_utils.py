from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from app.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from app.models import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """
    Creates an access token to pass to the frontend and be used for authentication

    Parameters:
    - data: dict - a dictionary containing the user details
    - expires_delta (optional) - how long the access token should live.
    If excluded, defaults to 30 minutes

    Returns:
    - encoded_jwt: - a securly encoded JWT
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str, credentials_exception):
    """
    Verifies the JWT by decoding it

    Parameters:
    - token: str - The JWT to verify
    - credentials_exception: HTTPException - the exception to raise in case
    of an error

    Returns:
    - str: The username extracted from the token if verification is successful

    Raises:
    - credentials_exception: If the token is invalid or the username is not
    found in the payload
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return username

def verify_password(password, hashed_password):
    return pwd_context.verify(password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_user(db: Session, identifier: str, password: str) -> User | None:
    user = db.query(User).filter(
        (User.username == identifier) | (User.email == identifier)
    ).first()
    if not user or not verify_password(password, user.password_hash):
        return None
    return user